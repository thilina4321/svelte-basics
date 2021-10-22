<script>
  import FeedBackList from "../components/feedback/feedbackList.svelte";
  $: feedbacks = [
    { id: 1, fb: "feedback 1" },
    { id: 2, fb: "feedback 2" },
  ];

  $: fbName = "";

  const createFeedback = (e) => {
    e.preventDefault();
    const id = feedbacks.length + 1;
    feedbacks = [...feedbacks, { id, fb: fbName }];
  };

  const updateFeedback = (id, fb) => {
    const findFeedback = feedbacks.find((fb) => fb.id === id);
    feedbacks[findFeedback] = fb;
  };
  const deleteFeedback = (id) => {
    feedbacks = feedbacks.filter((fb) => fb.id !== id);
  };
</script>

<main>
  <h1>Feedback Component</h1>
  <p>Add User</p>
  <form on:submit={createFeedback}>
    <input bind:value={fbName} placeholder="Enter Name" />
    <button type="submit"> Save </button>
  </form>
  <FeedBackList {updateFeedback} {deleteFeedback} {feedbacks} />
</main>
