import axios from 'axios'

export async function getAnnouncements() {
  const res = await axios.get('/api/resource/Announcement?fields=["name","title","content","expiry_date","has_attachment","acknowledged"]')
  return res.data.data
}

export async function acknowledgeAnnouncement(name) {
  await axios.put(`/api/resource/Announcement/${name}`, {
    data: { acknowledged: 1 },
  })
}
