<script setup lang="ts">
import { readItems, readSingleton } from "@directus/sdk";

const { $directus } = useNuxtApp();

interface HeroData {
  id?: string | number;
  Header: string;
  Tagline: string;
  Image: string;
}

interface StrandsPage {
  id?: string;
  Header: string;
  Tagline: string;
  Strands: Array<string | number>;
}

interface Strand {
  id?: string | number;
  Header: string;
  Content: string;
  Link: string;
  Image: string;
}

interface FundingData {
  id?: string;
  Header: string;
  UKRI_light: string;
  UKRI_dark: string;
  DFG_light: string;
  DFG_dark: string;
}

interface NewsItem {
  id: number | string;
  Title: string;
  Abstract: string;
  Abstract_Image: string;
  date_created: string;
}

interface EventItem {
  id?: string | number;
  Name: string;
  Day: string;
  Month: string;
  Year: string;
  Link: string;
  Location: string;
  Content?: string;
}

function eventTimestamp(item: EventItem) {
  return new Date(Number(item.Year), useMonthStringToNumber(item.Month)).getTime();
}

async function requestWithRetry<T>(run: () => Promise<T>, label: string): Promise<T> {
  const maxAttempts = import.meta.server ? 2 : 1;
  let lastError: unknown;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await run();
    } catch (error) {
      lastError = error;

      if (import.meta.server) {
        console.error(`[homepage] ${label} request failed (attempt ${attempt}/${maxAttempts})`, error);
      }

      if (attempt < maxAttempts) {
        await new Promise((resolve) => setTimeout(resolve, 150));
      }
    }
  }

  throw lastError;
}

const fallbackStrandsPage = {
  Header: "Main Strands",
  Tagline: "",
};

async function requestSection<T>(label: string, run: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await requestWithRetry(run, label);
  } catch (error) {
    if (import.meta.server) {
      console.error(`[homepage] Using fallback for ${label}`, error);
    }
    return fallback;
  }
}

const { data: pageData } = await useAsyncData("page:index", async () => {
  try {
    const [hero, strandPage, funding] = await Promise.all([
      requestSection(
        "Hero",
        () => $directus.request(readSingleton("Hero", { fields: ["id", "Header", "Tagline", "Image"] })) as Promise<HeroData>,
        null as HeroData | null,
      ),
      requestSection(
        "Strands",
        () => $directus.request(readSingleton("Strands", { fields: ["id", "Header", "Tagline", "Strands"] })) as Promise<StrandsPage>,
        { id: undefined, Header: fallbackStrandsPage.Header, Tagline: fallbackStrandsPage.Tagline, Strands: [] } as StrandsPage,
      ),
      requestSection(
        "Funding",
        () => $directus.request(readSingleton("Funding", { fields: ["id", "Header", "UKRI_light", "UKRI_dark", "DFG_light", "DFG_dark"] })) as Promise<FundingData>,
        null as FundingData | null,
      ),
    ]);

    const [newsItems, events] = await Promise.all([
      requestSection(
        "News",
        () =>
          $directus.request(
            readItems("News", {
              limit: 9,
              sort: ["-date_created"],
              fields: ["id", "Title", "Abstract", "Abstract_Image", "date_created"],
              filter: { status: { _eq: "published" } },
            }),
          ) as Promise<NewsItem[]>,
        [],
      ),
      requestSection(
        "Event",
        () =>
          $directus.request(
            readItems("Event", {
              fields: ["id", "Name", "Day", "Month", "Year", "Link", "Location", "Content"],
            }),
          ) as Promise<EventItem[]>,
        [],
      ),
    ]);

    const strandIds = strandPage.Strands ?? [];
    let strands: Strand[] = [];

    if (strandIds.length) {
      const fetchedStrands = await requestSection(
        "Strand",
        () =>
          $directus.request(
            readItems("Strand", {
              fields: ["id", "Header", "Content", "Link", "Image"],
              filter: {
                id: {
                  _in: strandIds,
                },
              },
            }),
          ) as Promise<Strand[]>,
        [],
      );

      const strandsById = new Map(
        fetchedStrands.map((strand) => [String(strand.id), strand]),
      );

      strands = strandIds
        .map((id) => strandsById.get(String(id)))
        .filter((strand): strand is Strand => Boolean(strand));
    }

    const latestNews = [...newsItems];

    const now = Date.now();
    const forthcomingEvents = [...events]
      .filter((event) => eventTimestamp(event) > now)
      .sort((a, b) => eventTimestamp(b) - eventTimestamp(a));

    return {
      hero,
      strandPage: {
        Header: strandPage.Header || fallbackStrandsPage.Header,
        Tagline: strandPage.Tagline || fallbackStrandsPage.Tagline,
      },
      strands,
      latestNews,
      forthcomingEvents,
      funding,
    };
  } catch (error) {
    if (import.meta.server) {
      console.error("[homepage] Unexpected fatal error, rendering fallbacks", error);
    }

    return {
      hero: null,
      strandPage: fallbackStrandsPage,
      strands: [] as Strand[],
      latestNews: [] as NewsItem[],
      forthcomingEvents: [] as EventItem[],
      funding: null as FundingData | null,
    };
  }
});

if (!pageData.value) {
  throw createError({ statusCode: 500, statusMessage: "Failed to load homepage content" });
}

const { hero, strandPage, strands, latestNews, forthcomingEvents, funding } = pageData.value;

definePageMeta({
  layout: 'landing-page'
})
</script>

<template>
  <div class="grid grid-cols-1 justify-center gap-y-24">
    <HomeHero :hero="hero" />
    <HomeStrands :strand-page="strandPage" :strands="strands" />
    <HomeLatestNews :items="latestNews" />
    <HomeForthcomingEvents :events="forthcomingEvents" />
    <HomeFunding :item="funding" />
  </div>
</template>
