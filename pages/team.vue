<script setup lang="ts">
const teamMembers = [
  {
    name: 'Bettina Bildhauer',
    title: 'Principal Investigator, German Studies, St Andrews',
    description: 'Based at the University of St Andrews in the United Kingdom, Bettina Bildhauer is a Professor of Modern Languages specialising in medieval German. Her interest in The Seven Sages of Rome goes back to her PhD days, when she was interested in the occurrence of blood in one of the Latin versions. She has published on German and Latin versions of The Seven Sages, and co-edited a German-English-language special issue of the journal Das Mittelalter on this textual tradition.',
    image: '/team/bettina_bildhauer.jpg',
    alt: 'Image of Bettina Bildhauer',
    mail: '',
    twitter: ''
  },
  {
    name: 'Jutta Eming',
    title: 'Principal Investigator, German Studies, FU Berlin',
    description: 'Jutta Eming is a Professor for Medieval German Literature and Language at Freie Universität Berlin, Germany. She has worked extensively on aspects of gender, genre, and emotionality in medieval and early modern literature and is especially interested in early modern prose and dramatized versions of The Seven Sages of Rome. She has published on the female characters in two early modern German versions of The Seven Sages and the tales of St Catherine, and is also a co-editor of the upcoming special issue of the journal Das Mittelalter on this textual tradition.',
    image: '/team/jutta_eming.jpg',
    alt: 'Image of Jutta Eming',
    mail: '',
    twitter: ''
  },
  {
    name: 'Rita Schlusemann',
    title: 'Postdoctoral Researcher, FU Berlin',
    description: 'Rita Schlusemann is a “Privatdozentin” for Dutch (and German) Medieval and Early Modern Literature and Language at Freie Universität Berlin in Germany. Her work on the supranational dissemination of several narratives in European language areas and their multimodal characteristics forms the basis for her interest in the Seven Sages of Rome. She has published on the European dissemination of the so called version H of the narrative, on aspects of genre and on multimodality, especially in the Dutch and Low German incunabula tradition.',
    image: '/team/rita_schlusemann.png',
    alt: 'Image of Rita Schlusemann',
    mail: '',
    twitter: ''
  },
  {
    name: 'Eliza Hähnke',
    title: 'Project Masters Student, FU Berlin',
    description: '',
    image: '/team/eliza_hähnke.jpg',
    alt: 'Image of Eliza Hähnke',
    mail: '',
    twitter: ''
  },
  {
    name: 'TBA',
    title: 'Project Masters Student, Würzburg',
    description: '',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
    alt: 'Placeholder',
    mail: '',
    twitter: ''
  },
  {
    name: 'TBA',
    title: 'Postdoctoral Research Assistant, St Andrews',
    description: '',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
    alt: 'Placeholder',
    mail: '',
    twitter: ''
  }
]
const advisoryBoardMembers = [
  {
    name: 'Ulrich Marzolph',
    title: 'Arabic, Göttingen',
    description: 'Ulrich Marzolph served most of his professional life as a member of the editorial committee of the German-language Enzyklopädie des Märchens and as adjunct professor of Arabic, Persian, and Islamic Studies at the Georg-August-University at Göttingen. His main area of interest is the rich field of Middle Eastern Muslim narrative culture. His last major book publication is “101 Middle Eastern Tales and Their Impact on Western Oral Tradition” (Detroit, 2020). Retired since 2019, he is currently working on fables in premodern Arabic literature.',
    image: '/team/ulrich_marzolph.jpg',
    alt: 'Image of Ulrich Marzolph',
    mail: '',
    twitter: ''
  },
  {
    name: 'Bea Lundt',
    title: 'History, Winneba (Ghana)',
    description: 'Bea Lundt studied Social Sciences, German Literature and Linguistics and History. Her dissertation was about gender structures and social change in European narrative traditions of Melusine and Merlin in the 12th to 16th century. Her second book project (Habilitation) was about gender and wisdom in the texts of The Seves Sages. She also published several articles about diversity in gender roles in different variants of it. She is an Emeritus Professor of Medieval History at Europe University Flensburg. Since 2011 she has been a visiting professor at the University of Education Winneba in Ghana (West Africa), researching African narratives such as those about Ananse.',
    image: 'https://bea-lundt.de/wp-content/uploads/2020/01/Foto-Bea-e1580341158434-300x295.jpg',
    alt: 'Image of Bea Lundt',
    mail: '',
    twitter: ''
  },
  {
    name: 'Ulrich Marzolph',
    title: 'Arabic, Göttingen',
    description: 'Ulrich Marzolph served most of his professional life as a member of the editorial committee of the German-language Enzyklopädie des Märchens and as adjunct professor of Arabic, Persian, and Islamic Studies at the Georg-August-University at Göttingen. His main area of interest is the rich field of Middle Eastern Muslim narrative culture. His last major book publication is “101 Middle Eastern Tales and Their Impact on Western Oral Tradition” (Detroit, 2020). Retired since 2019, he is currently working on fables in premodern Arabic literature.',
    image: '/team/ulrich_marzolph.jpg',
    alt: 'Image of Ulrich Marzolph',
    mail: '',
    twitter: ''
  },
  {
    name: 'Yasmina Foehr-Janssens',
    title: 'French, Geneva',
    description: 'Yasmina Foehr-Janssens is full professor of French Medieval Literature at the University of Geneva, Switzerland. Her research focuses on Gender Studies applied to Medieval French Literature. She has been the leader of an interdisciplinary research program on the history of breastfeeding and its <NuxtLink to="https://unige.ch/lactationinhistory/">cultural aspects</NuxtLink>. The Swiss National Science Foundation and the Belgian Fonds de la recherche scientifique (Wallonie) fund her present research on The Seven Sages in French Literature with a special focus on the construction of masculinity and serial writing.',
    image: '/team/yasmina_foehr.jpg',
    alt: 'Image of Yasmina Foehr-Janssens',
    mail: '',
    twitter: ''
  },
  {
    name: 'Ida Toth',
    title: 'Greek, Oxford',
    description: 'Ida Toth a historian of late antique and medieval literary culture working in the Greek, Latin, and Slavonic linguistic areas. She holds the post of University Research Lecturer and Fellow in Medieval Latin, Byzantine Greek, and Byzantine Epigraphy at Oxford University. Her fascination with The Seven Sages of Rome stems from her long-standing interest in the cross-cultural transmission of wisdom literature. She has published on the Greek and Slavonic Life of Aesop, and on the Byzantine traditions of The Life of Syntipas the Philosopher.',
    image: 'https://www.history.ox.ac.uk/sites/default/files/history/images/person/cd_people_ida_toth.png',
    alt: 'Image of Ida Toth',
    mail: '',
    twitter: ''
  },
  {
    name: 'Mohsen Zakeri',
    title: 'Persian, Bochum',
    description: 'Mohsen Zakeri (University of Bochum) is a scholar in the field of Near Eastern History and Literature, with a focus on Late Antiquity, especially in the area of Iran and Islam. Besides teaching at several American and European Universities, he has authored a series of academic works including Sasanian Soldiers in Early Muslim Society: the Origins of the ‘Ayyārān and Futuwwa (1995), and Persian Wisdom in Arabic Garb: ‘Alī b. ‘Ubayda al-Rayḥānī (d. 219/834) and his Jawāhir al-kilam wa-farā’id al-ḥikam (2007). He is currently working on the Deutsche Forschungsgemeinschaft [DFG] financed Project “How Sasanian Science and Literature passed on to the Muslims. A Reassessment of Culture Transfer by Translation in Late Antique Persia” [June 2022 – May 2025].',
    image: '/team/mohsen_zakeri.jpg',
    alt: 'Image of Mohsen Zakeri',
    mail: '',
    twitter: ''
  }
]
</script>

<template>
  <div class="bg-white dark:bg-gray-800 py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-xl px-4 md:px-8">
      <div class="mb-10 md:mb-16">
        <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:mb-6 lg:text-3xl">
          Our team members
        </h2>
      </div>
      <div class="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
        <TeamCard
          v-for="teamMember in teamMembers"
          :key="teamMember.name"
          :name="teamMember.name"
          :title="teamMember.title"
          :description="teamMember.description"
          :image="teamMember.image"
          :alt="teamMember.alt"
          :mail="teamMember.mail"
          :twitter="teamMember.twitter"
        />
      </div>
      <div class="mb-10 mt-10 md:mb-16">
        <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:mb-6 lg:text-3xl">
          Advisory board members
        </h2>
      </div>
      <div class="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
        <TeamCard
          v-for="teamMember in advisoryBoardMembers"
          :key="teamMember.name"
          :name="teamMember.name"
          :title="teamMember.title"
          :description="teamMember.description"
          :image="teamMember.image"
          :alt="teamMember.alt"
          :mail="teamMember.mail"
          :twitter="teamMember.twitter"
        />
      </div>
    </div>
  </div>
</template>
