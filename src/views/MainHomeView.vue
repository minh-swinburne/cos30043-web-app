<script>
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Home</v-card-title>
          <v-card-text>
            Welcome to the Home page
          </v-card-text>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
            alt="Desert"
          ></v-img>
          <v-card-actions>
            <v-btn color="primary" to="/products">Products</v-btn>
            <v-btn color="primary" to="/about">About</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
