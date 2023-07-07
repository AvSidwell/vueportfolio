<template>
  <div class="bg-dark row">
    <div class="div text-center col-12 col-md-6 col-sm-6">
      <form action="https://formspree.io/f/xrgvrgpb" method="POST">
        <label>
          Your Email:
          <br />
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Your Name:
          <br />
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Your message:
          <br />
          <br />
          <textarea name="message" class="it"></textarea>
        </label>
        <!-- your other form fields go here -->
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
    <div class="text-center col-12 col-md-6 col-sm-6 plo">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.4713108971387!2d18.629726375199702!3d-33.95472357319385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc4fe4f3efeba1%3A0xe57c358df3b74909!2sTingi%20St%2C%20Matroosfontein%2C%20Cape%20Town%2C%207490!5e0!3m2!1sen!2sza!4v1688567479971!5m2!1sen!2sza"
        width="290"
        height="290"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.it {
  width: 90%;
  border-radius: 1rem;
  margin: auto;
  padding: 0.4rem;
}
input {
  width: 90%;
  border-radius: 1rem;
  margin: 1rem;
  height: 2.5rem;
  padding: 0.4rem;
}

label {
  color: #cbe4de;
}

.row {
  padding-top: 3rem;
}
</style>
