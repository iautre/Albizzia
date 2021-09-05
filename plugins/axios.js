export default function ({ $axios, redirect }) {
  $axios.setHeader('Client', '2d1f5385e831422eb16981a84befc910')
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}