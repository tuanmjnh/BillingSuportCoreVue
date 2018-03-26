<script>
import Vue from "vue";
import axios from "axios";
import App from "themes/default/main";

// function loadWidget() {
//   console.log('Loaded ' + widgetType)
//   return import('./widgets/' + widgetType)
// }

// let widgetType

// export default {
//   components: {
//     OneWidget: () => loadWidget(),
//     TwoWidget: () => loadWidget(),
//     ThreeWidget: () => loadWidget()
//   },
//   created() {
//     axios.get(`http://localhost:3000/widgets/` + this.widgetId + '')
//       .then(response => {
//         this.widget = response.data
//         widgetType = this.widget.type.charAt(0).toUpperCase() + this.widget.type.slice(1) + 'Widget.vue'
//       })
//       .catch(e => {
//         this.errors.push(e)
//       })
//   }
// }
</script>
