<template>
    <Card class="p-4 relative">
      <div class="flex justify-between items-start">
        <div>
          <h2 class="text-lg font-semibold">{{ announcement.title }}</h2>
          <p class="text-sm text-gray-600 mb-2">{{ announcement.content }}</p>
          <div class="flex gap-2 items-center">
            <Badge v-if="isExpired" color="red">Expired</Badge>
            <Badge v-else color="green">Active</Badge>
            <Icon v-if="announcement.has_attachment" name="Paperclip" class="w-4 h-4" />
          </div>
        </div>
        <Button
          v-if="!announcement.acknowledged"
          size="sm"
          @click="$emit('acknowledge')"
        >Acknowledge</Button>
      </div>
    </Card>
  </template>
  
  <script setup>
  import { Card, Badge, Button, Icon } from 'frappe-ui'
  import { computed } from 'vue'
  
  const props = defineProps({
    announcement: Object,
  })
  
  const isExpired = computed(() => {
    return new Date(props.announcement.expiry_date) < new Date()
  })
  </script>
  