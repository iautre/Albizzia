<template>
<Html>
    <Head>
        <Title>{{title}} - Autre Coding</Title>
        <Meta name="description" :content="description" />
    </Head>
</Html>
</template>
<script lang="ts" >

export default {
    props: {
        title: {
            type: String,
            default: '首页'
        },
        description:  {
            type: String,
            default: 'autre coding'
        },
    },
}
</script>