<template>
  <v-row dense>
    <v-col cols="12" >
      <v-card color="#385F73" class="ma-1">
      <v-carousel
          cycle
          height="400"
          hide-delimiter-background
          show-arrows="hover"
      >
        <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
        >
          <v-sheet
              :color="colors[i]"
              height="100%"
          >
            <div class="d-flex fill-height justify-center align-center">
              <div class="text-h2">
                {{ slide }} Slide
              </div>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card color="#385F73" theme="dark" class="ma-1">
        <v-card-title class="text-h5">
          Unlimited music now
        </v-card-title>

        <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and
          offline.</v-card-subtitle>

        <v-card-actions>
          <v-btn variant="text">
            Listen Now
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col cols="12">
      <v-card color="#1F7087" theme="dark" class="ma-1">
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title class="text-h5">
              Supermodel
            </v-card-title>

            <v-card-subtitle>Foster the People</v-card-subtitle>

            <v-card-actions>
              <v-btn class="ms-2" variant="outlined" size="small">
                START RADIO
              </v-btn>
            </v-card-actions>
          </div>

          <v-avatar class="ma-3" size="125" rounded="0">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
          </v-avatar>
        </div>
      </v-card>
    </v-col>

    <v-col cols="12">
      <v-card color="#952175" theme="dark" class="ma-1">
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title class="text-h5">
              Halcyon Days
            </v-card-title>

            <v-card-subtitle>Ellie Goulding</v-card-subtitle>

            <v-card-actions>
              <v-btn class="ms-2" icon="mdi-play" variant="text"></v-btn>
            </v-card-actions>
          </div>

          <v-avatar class="ma-3" size="125" rounded="0">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
          </v-avatar>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data () {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
    }
  },
}
</script>