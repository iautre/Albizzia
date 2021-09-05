export default function ({ $axios, redirect }) {
  $axios.setHeader('Client', '2d1f5385e831422eb16981a84befc910')
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError(error => {
    console.log('*1************************************************************************')
    console.log(String(error))
    console.log('*2************************************************************************')
    console.log(JSON.stringify(error))
    console.log('*3************************************************************************')
    const code = parseInt(error.response && error.response.status)
    console.log(error)
    if (code === 400) {
      //redirect('/400')
    }
  })
}