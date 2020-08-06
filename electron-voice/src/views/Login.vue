<template>
  <div class="login">
    <b-jumbotron  header="SpaceCRAFT VR Voice Launcher"
                  lead="Powered by Vivox and Electron"
                  bg-variant="info"
                  style="background-image: url(https://wallpapercave.com/wp/kLRFyFa.jpg); background-size: 100%;"
                  text-variant="white">
      <p>For more information visit website</p>
      <b-btn target="_blank" href="http://vivox.com/features">More Info</b-btn>
    </b-jumbotron>
    <b-container>
      <b-row>
        <b-col lg="4" md="3"></b-col>
        <b-col lg="4" md="6">
          <LoginForm />
        </b-col>
        <b-col lg="4" md="3"></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'login',
  components: {
    LoginForm
  }
}
</script>