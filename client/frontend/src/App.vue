<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">📢 Announcement Board</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <AnnouncementCard
        v-for="announcement in announcements"
        :key="announcement.name"
        :announcement="announcement"
        @acknowledge="acknowledge(announcement.name)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AnnouncementCard from './components/AnnouncementCard.vue'
import { getAnnouncements, acknowledgeAnnouncement } from './api/announcements.js'

const announcements = ref([])

onMounted(async () => {
  announcements.value = await getAnnouncements()
})

function acknowledge(name) {
  acknowledgeAnnouncement(name)
  announcements.value = announcements.value.map((a) =>
    a.name === name ? { ...a, acknowledged: true } : a
  )
}
</script>
