<script>
    import Feedback from './feedback.svelte'
    export let feedbacks = []
    export let updateFeedback
    export let deleteFeedback

</script>

<main>
    {#each feedbacks as feedback (feedback.id)}
        <Feedback {feedback} {updateFeedback} {deleteFeedback} />
    {/each}
</main>