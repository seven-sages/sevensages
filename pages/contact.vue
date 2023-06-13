<template>
  <div class="bg-white dark:bg-gray-800 py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-md px-4 md:px-8">
      <h1
        class="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white sm:text-3xl md:mb-6"
      >
        Contact
      </h1>

      <p class="mb-6 text-gray-500 dark:text-gray-200 sm:text-lg md:mb-8">
        For press and urgent matters, contact us through our individual
        university email addresses or Twitter accounts for a speedy response.
        You can find our profiles
        <NuxtLink class="text-blue-700" to="/team">here</NuxtLink>.
      </p>
      <p class="mb-6 text-gray-500 dark:text-gray-200 sm:text-lg md:mb-8">
        For all other enquiries, please complete the form below. We would love
        to hear from other researchers, creatives, artists, writers and members
        of the public interested in the textual tradition of the Seven Sages of
        Rome and its many relations.
      </p>
    </div>

    <!-- text - start -->
    <div class="mb-10 md:mb-16">
      <h2
        class="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:mb-6 lg:text-3xl"
      >
        Get in touch
      </h2>
    </div>
    <!-- text - end -->

    <!-- form - start -->
    <form class="mx-auto grid max-w-screen-sm gap-4 sm:grid-cols-2">
      <div>
        <label
          for="first-name"
          class="mb-2 inline-block text-sm text-gray-800 dark:text-gray-200 sm:text-base"
          >Name</label
        >
        <input
          name="first-name"
          class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
        />
      </div>

      <div>
        <label
          for="email"
          class="mb-2 inline-block text-sm text-gray-800 dark:text-gray-200 sm:text-base"
          >Email*</label
        >
        <input
          name="email"
          class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
        />
      </div>

      <div class="sm:col-span-2">
        <label
          for="subject"
          class="mb-2 inline-block text-sm text-gray-800 dark:text-gray-200 sm:text-base"
          >Subject*</label
        >
        <input
          name="subject"
          class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
        />
      </div>

      <div class="sm:col-span-2">
        <label
          for="message"
          class="mb-2 inline-block text-sm text-gray-800 dark:text-gray-200 sm:text-base"
          >Message*</label
        >
        <textarea
          name="message"
          class="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
        ></textarea>
      </div>

      <div class="flex items-center justify-between sm:col-span-2">
        <button
          disabled
          class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base disabled:bg-indigo-200 dark:disabled:bg-indigo-200"
        >
          Send
        </button>

        <span class="text-sm text-gray-500">*Required</span>
      </div>
    </form>
    <!-- form - end -->
  </div>
</template>
