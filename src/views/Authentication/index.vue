<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>Sign Up</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="signup">
                <v-text-field
                  v-model="email"
                  label="Email"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Password"
                  type="password"
                  required
                ></v-text-field>
                <v-btn type="submit">Sign Up</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
</script>

<style scoped>
</style>