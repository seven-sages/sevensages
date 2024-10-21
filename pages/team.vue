<script setup lang="ts">
const { getSingletonItem, getItems } = useDirectusItems();
const { getThumbnail: img } = useDirectusFiles();

interface IPerson {
  id?: string | number;
  Name: string;
  Tagline: string;
  Description: string;
  Image: string;
  Twitter_Account: string;
  Mail_Address: string;
  Type: string;
}

interface ITeamPerson {
  id: number;
  Person_id: number;
}

interface ITeam {
  Team_Member_Title: string;
  Team_Members: ITeamPerson[];
  Advisory_Board_Members_Title: string;
  Advisory_Board_Members: ITeamPerson[];
}

const team = ref();
const teamMembers = ref();
const advisoryBoardMembers = ref();
const formerMembers = ref()

team.value = await getSingletonItem<ITeam>({
  collection: "Team",
  params: {
    fields: ["*.Person_id"],
  },
});

getItems<IPerson[]>({
  collection: "Person",
  params: {
    filter: {
      Active: {
        _eq: true,
      },
      id: {
        _in: team.value.Team_Members.map((teamMember) => teamMember.Person_id),
      },
    },
  },
}).then((response) => {
  teamMembers.value = response;
});

getItems<IPerson[]>({
  collection: "Person",
  params: {
    filter: {
      Active: {
        _eq: true,
      },
      id: {
        _in: team.value.Advisory_Board_Members.map(
          (advisoryBoardMember) => advisoryBoardMember.Person_id,
        ),
      },
    },
  },
}).then((response) => {
  advisoryBoardMembers.value = response;
});

getItems<IPerson[]>({
  collection: "Person",
  params: {
    filter: {
      Active: {
        _eq: false,
      },
    },
  },
}).then((response) => {
  formerMembers.value = response;
});
</script>

<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-xl px-4 md:px-8">
      <div class="mb-10 md:mb-16">
        <h2
          class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl"
        >
          {{ team.Team_Member_Title }}
        </h2>
      </div>
      <div
        class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12"
      >
        <TeamCard
          v-for="item in teamMembers"
          :key="item.id"
          :name="item.Name"
          :title="item.Tagline"
          :description="item.Description"
          :image="img(item.Image, { format: 'webp', quality: 40 })"
          :alt="item.Name"
          :mail="item.Mail_Address"
          :twitter="item.Twitter_Account"
        />
      </div>
      <div class="mb-10 mt-10 md:mb-16">
        <h2
          class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl"
        >
          {{ team.Advisory_Board_Members_Title }}
        </h2>
      </div>
      <div
        class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12"
      >
        <TeamCard
          v-for="item in advisoryBoardMembers"
          :key="item.id"
          :name="item.Name"
          :title="item.Tagline"
          :description="item.Description"
          :image="img(item.Image, { format: 'webp', quality: 40 })"
          :alt="item.Name"
          :mail="item.Mail_Address"
          :twitter="item.Twitter_Account"
        />
      </div>
      <div class="mb-10 mt-10 md:mb-16">
        <h2
          class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl"
        >
          {{ team.Former_Members_Title }}
        </h2>
      </div>
      <div
        class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12"
      >
        <TeamCard
          v-for="item in formerMembers"
          :key="item.id"
          :name="item.Name"
          :title="item.Tagline"
          :description="item.Description"
          :image="img(item.Image, { format: 'webp', quality: 40 })"
          :alt="item.Name"
          :mail="item.Mail_Address"
          :twitter="item.Twitter_Account"
        />
      </div>
    </div>
  </div>
</template>
