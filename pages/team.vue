<script setup lang="ts">
import { readItems, readSingleton } from "@directus/sdk";

const { $directus } = useNuxtApp();
const { getAssetUrl: img } = useDirectusAssetUrl();

interface IPerson {
  id?: string | number;
  Name: string;
  Tagline: string;
  Description: string;
  Image: string;
  Twitter_Account: string;
  Mail_Address: string;
  Type: string;
  Active: boolean;
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
  StudentAssistant: ITeamPerson[];
  Former_Members_Title: string;
}

export interface IStudentAssistant {
  id: number,
  Name: string,
  Role: string,
  Affiliation: string,
}

const team = ref<ITeam>({} as ITeam);

const teamMembers = ref<IPerson[]>([]);
const formerTeamMembers = ref<IPerson[]>([]);

const advisoryBoardMembers = ref<IPerson[]>([]);
const formerAdvisoryBoardMembers = ref<IPerson[]>([]);

const studentAssistants: Ref<IStudentAssistant[]> = ref([])

team.value = await $directus.request(
  readSingleton("Team", {
    fields: ["*.*"],
  }),
) as ITeam;

$directus.request(
  readItems("Person", {
    filter: {
      id: {
        _in: team.value.Team_Members.map((teamMember) => teamMember.Person_id),
      },
    },
  }),
).then((response) => {
  const people = response as IPerson[];
  teamMembers.value = people.filter(member => member.Active === true);
  formerTeamMembers.value = people.filter(member => member.Active === false);
});

$directus.request(
  readItems("Person", {
    filter: {
      id: {
        _in: team.value.Advisory_Board_Members.map(
          (advisoryBoardMember) => advisoryBoardMember.Person_id,
        ),
      },
    },
  }),
).then((response) => {
  const people = response as IPerson[];
  advisoryBoardMembers.value = people.filter(member => member.Active === true);
  formerAdvisoryBoardMembers.value = people.filter(member => member.Active === false);
});

$directus.request(readItems("Student_Assistant")).then((response) => {
  studentAssistants.value = response as IStudentAssistant[];
});
</script>

<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-(--breakpoint-xl) px-4 md:px-8">
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
          :image="img(item.Image, { format: 'webp', quality: 40 }) ?? undefined"
          :alt="item.Name"
          :mail="item.Mail_Address"
          :twitter="item.Twitter_Account"
        />
      </div>
      <div class="mb-10 mt-10 md:mb-16" v-show="studentAssistants.length">
        <h3
          class="mb-4 text-center text-lg font-bold text-gray-800 md:mb-6 lg:text-xl"
        >
          Student Assistants
        </h3>
        <div class="mx-auto">
          <ul>
            <StudentAssistantEntry
              v-for="student of studentAssistants"
              :key="student.id"
              :student="student" />
          </ul>
        </div>
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
          :image="img(item.Image, { format: 'webp', quality: 40 }) ?? undefined"
          :alt="item.Name"
          :mail="item.Mail_Address"
          :twitter="item.Twitter_Account"
        />
      </div>
      <div class="mb-10 mt-10 md:mb-16" v-show="formerTeamMembers.length || formerAdvisoryBoardMembers.length">
        <h2
          class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl"
        >
          {{ team.Former_Members_Title }}
        </h2>
        <div v-show="formerTeamMembers.length">
          <h3
            class="mb-4 text-center text-xl font-bold text-gray-800 md:mb-6 lg:text-2xl"
          >
            Former Team Members
          </h3>
          <div
            class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12"
          >
            <TeamCard
              v-for="item in formerTeamMembers"
              :key="item.id"
              :name="item.Name"
              :title="item.Tagline"
              :description="item.Description"
              :image="img(item.Image, { format: 'webp', quality: 40 }) ?? undefined"
              :alt="item.Name"
              :mail="item.Mail_Address"
              :twitter="item.Twitter_Account"
            />
          </div>
        </div>
        <div v-show="formerAdvisoryBoardMembers.length">
          <h3
            class="mb-4 text-center text-xl font-bold text-gray-800 md:mb-6 lg:text-2xl"
          >
            Former Advisory Board Members
          </h3>
          <div
            class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12"
          >
            <TeamCard
              v-for="item in formerAdvisoryBoardMembers"
              :key="item.id"
              :name="item.Name"
              :title="item.Tagline"
              :description="item.Description"
              :image="img(item.Image, { format: 'webp', quality: 40 }) ?? undefined"
              :alt="item.Name"
              :mail="item.Mail_Address"
              :twitter="item.Twitter_Account"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
