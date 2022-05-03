
docker build -t autrec/nuxt .

docker run -itd --name nuxt -p 3000:3000 autrec/nuxt

参考 
https://github.com/Baiyuetribe/nuxt3-naive-ui-starter