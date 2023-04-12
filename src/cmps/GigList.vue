<template>

    <section class="gig-list" v-if="gigs.length">
      <GigPreview
    
      />
    </section>


    

</template>

<script>
import GigPreview from './GigPreview.vue'

export default {
  name: 'GigList',
  props: ['gigs'],
  data() {
    return {
 
    }
  },
  methods: {

  },
  components: {
    GigPreview,

  },
}
</script>
