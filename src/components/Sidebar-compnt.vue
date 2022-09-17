<template>
  <div class="div" >
    <!-- <h3> {{ title }}</h3>
    <slot></slot> -->
    <nav>
       <div class="flex-div">
           <div>
                <div>
                    <div>
                     <img :src="image" class="logo"/>   
                    </div>
                    <ul >
                        <li v-for="(data) in links" :key="data" class="list" > 
                                <a href="#" class="color"> {{ data.link}} </a>
                        </li>
                    </ul>
                </div>
              <!-- Footer logo -->
                <div >
                        <img :src="image" class="logo2"/> 
                </div>
            </div>
            <!-- sub side-bar -->
            <div class="sub-div">
                <ul class="listMargin">
                    <li v-for="(data) in subLinks" :key="data" class="list2 bttn">
                        <!-- <div @mouseover= "handleColor" > -->
                         <a href="#" class="color2"> {{ data.subLink}} </a>
                        <!-- </div> -->
                    </li>
                </ul>
            </div>
       </div>
    </nav>

  </div>
</template>

<script>
import image from "../assets/logo.png"
export default {
  name: 'Sidebar-compnt',
  props: {
    title : String
  },
  data() {
     return {
        links: [
            { "link" : "Java" },
            { "link" : "Java2" },
            { "link" : "Jango" },
            { "link" : "Shadow" }
        ],
        subLinks: [
            { "subLink" : "Admin"},
            { "subLink" : "General"}
        ],
        image: image
     }
  },
   methods: {
         handleColor() {
             console.log("hello world")
         }
   }

}
</script>

<style scoped>
body{
    margin: 0px;
}
.div{
    height: 100vh;
    text-align: left;
    width: 311px;
    background: #58585A;
    margin: 0px;
}
.sub-div{
    /* border-bottom-left-radius: 20%; */
    height: 100vh;
    width: 200px;
    margin-left: 15%;
    border-radius: 49px 0 0 49px;
    color:#58585A;
    background: #FAFAFA;
    box-shadow: 0px 1px 5px #3F3F4419;
}
.color{
    color: #FAFAFA;
}
.color2{
    color:#58585A;
}
.bttn{
    background: none;
    /* width: 168px; */
    padding: 10px;
    margin-right: 10px;
}
.bttn:hover,
.bttn:active{
    background: #E6E5E5;
}

.logo{
    width: 40px;
    margin-bottom: 60px;
    margin-top: 28px;
    margin-left: 45px;
}
.logo2{
    width: 40px;
    margin-top: 79px;
    margin-left: 45px;
}
.sidebar-links{
    list-style: none;
}
.list{
    list-style: none;
    margin-top: 18.3px;
}
.list a{
    text-decoration: none;
}
.list2{
    list-style: none;
    /* margin-top: 21px; */
}
.list2 a{
    text-decoration: none;
}
.listMargin{
    margin-top: 167px;
}


.flex-div{
    display: flex;
    flex-direction: row
}


</style>
