<script lang="ts">
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greeting = "";

  if (currentHour > 6 && currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour > 12 && currentHour < 19) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
</script>

<h1 class="text-4xl font-bold">{greeting}</h1>
