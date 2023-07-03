<template>
    <v-app id="inspire">
        <Header />
        <v-main class="bg-grey-lighten-3">
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <div class="d-flex justify-center mb-6 bg-grey-lighten-3">
                            <v-sheet class="ma-2 " width="300px" color="grey-lighten-3">
                                <Sider />
                            </v-sheet>
                            <v-sheet class="ma-2 w-100" style="overflow:hidden;" max-width="100%" min-height="80vh" color="grey-lighten-3">
                                <slot />
                            </v-sheet>
                        </div>
                    </v-col>
                    <v-col cols="12">
                        <v-sheet class="d-flex align-center justify-center" color="grey-lighten-3">
                            <v-footer class="bg-grey-lighten-3 text-center d-flex flex-column">
                                <div>
                                    {{ new Date().getFullYear() }} · <strong>AutreCoding</strong>
                                </div>
                            </v-footer>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>