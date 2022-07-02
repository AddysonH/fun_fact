<template>
  <div class="home">
    <div id='gamePlay'>
    <div id='gameTop'>
      <h1 class='gameTitle animate-text'>Fun Fact!</h1>
      <button class='explainButton' @click='explain = true'>Instructions</button>
      <transition name='fade' appear>
        <div class='modal-overlay' v-if='explain' @click='explain = false'></div>
      </transition>
      <transition name='slide' appear>
        <div class='instructions' v-if='explain'>
          <h1>Welcome to Fun Fact!</h1>
          <p>Click a topic and read a fun fact.<br>Click the button from the same category to get a different fact or pick a different category!<br>Enjoy!</p>
          <button class='explainButton' @click='explain = false'>OK</button>
        </div>
      </transition>
    </div>
    <div id='topics' class='card'>
      <h3 class='categoryTitle'>Categories</h3>
      <ul>
        <li><button @click='catFact()'>Cats</button></li>
        <li><button @click='dogFact()'>Dogs</button></li>
        <li><button @click='goatFact()'>Goats</button></li>
      </ul>
    </div>
    <div>
      <h2 id='fact' class='card' style='display:none'></h2>
    </div>
    <div id='responses' style='display:none'>
      <ul>
        <li><button @click='goBack()'>Back</button></li>
        <!-- <li><button @click='tellMore()'>Cool! Tell me more</button></li> -->
        <!-- <li><button @click='beef()'>Yea right! Show me the Beef</button></li> -->
      </ul>
    </div>
    </div>
    <footer>
      <a href='https://www.linkedin.com/in/addyson-hangstefer-1081b7168?original_referer=https%3A%2F%2Fduckduckgo.com%2F'>My Linkedin</a>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
  },
  data: function () {
    return {
      explain: false,
      catFacts: [
        'When cats climb a tree, they cant go back down it head first. This is because their claws are facing the same way, instead, they have to go back down backward.',
        'A group of cats is called a clowder.',
        'A cat kneading is an act of contentment and adoration.', 'Both cats and humans have identical regions in the brain responsible for emotion.',
        'Cats sleep an average of 15 hours a day.',
        'Cats only use their meows to talk to humans, not each other.',
        'There are 44 recognized breeds of cats.',
        'Cats can recognize your voice. So, they are simply ignoring you.',
        'Cats can move both ears independently and around 180 degrees.'
      ],
      dogFacts: [
        'A dogs nose print is unique, much like a persons fingerprint.',
        'The name Collie means black. (Collies once tended black-faced sheep.)',
        'There are over 75 million pet dogs in the U.S. more than in any other country.',
        'All puppies are born deaf.',
        'Dogs belong to the Canidae family. The term is derived from the Latin term ‘canis’, which means dog. Although they come in various sizes, those that are categorized as canids typically have upright ears and tails, long muzzles, and teeth capable of tearing through flesh and cracking bones.',
        'Dogs have sweat glands in between their paws.',
        'Dogs have three eyelids. The third lid, called a nictitating membrane or “haw,” keeps the eye lubricated and protected.'
      ],
      goatFacts: [
        'Goats don’t graze on grass. Get a goat to clean up the grass of your beautiful lawn and it will devour all the shrubs but grass! This is because they are browsers and they prefer eating fruits, shoots, leaves, shrubs and plants.',
        'It is a popular belief that goats eat tin cans. Thats not true. Because they are browsers, they end up chewing anything that distantly looking like wooden vegetation and plants and these include labels on tin cans, paper and cardboard boxes.',
        'Goats are pretty good swimmers!',
        'Goats have little appendages of flesh hanging from their neck called wattles.',
        'The life span of a goat is about 15 years.',
        'Around the world, more people drink goat milk than cow milk.',
        'Goats use the sneeze sound as an alarm. They use a sneeze to warn each other of danger, whether real or imagined.',
        'Race horses are often given a goat friend so they will not be lonely in the stall.'
      ]
    }
  },
  computed: {
  },
  methods: {
    goBack: function () {
      document.getElementById('gameTop').style.display = 'block'
      document.getElementById('topics').style.display = 'block'
      document.getElementById('fact').style.display = 'none'
      document.getElementById('responses').style.display = 'none'
      document.querySelector('.explainButton').style.display = 'inline-block'
    },
    catFact: function () {
      var randomFact = this.catFacts[Math.floor(Math.random() * this.catFacts.length)]
      document.getElementById('fact').innerHTML = '<h3 style=text-decoration:underline>Did you know:</h3>' + randomFact
      document.querySelector('.explainButton').style.display = 'none'
      document.getElementById('topics').style.display = 'none'
      document.getElementById('responses').style.display = 'block'
      document.getElementById('fact').style.display = 'block'
      return randomFact
    },
    dogFact: function () {
      var randomFact = this.dogFacts[Math.floor(Math.random() * this.dogFacts.length)]
      document.getElementById('fact').innerHTML = '<h3 style=text-decoration:underline>Did you know:</h3>' + randomFact
      document.querySelector('.explainButton').style.display = 'none'
      document.getElementById('topics').style.display = 'none'
      document.getElementById('responses').style.display = 'block'
      document.getElementById('fact').style.display = 'block'
      return randomFact
    },
    goatFact: function () {
      var randomFact = this.goatFacts[Math.floor(Math.random() * this.goatFacts.length)]
      document.getElementById('fact').innerHTML = '<h3 style=text-decoration:underline>Did you know:</h3>' + randomFact
      document.querySelector('.explainButton').style.display = 'none'
      document.getElementById('topics').style.display = 'none'
      document.getElementById('responses').style.display = 'block'
      document.getElementById('fact').style.display = 'block'
      return randomFact
    },
    beef: function () {
      alert('There is no beef! In fact go find your own beef OK!')
    },
    tellMore: function () {
      alert('Still working on this option.')
      // I want to eventually have this button be clicked and reload whatever topic is active to give a new fun fact.
    }
  }
}
</script>
<style>
.home{
  display: flex;
  flex-direction: column;
  align-content: center;
  min-height: 100vh;
  margin:0px;
  background-color: lightblue;
  position: static;
  margin-bottom: 50px;
}
.explainButton{
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  display: inline-block;
  padding: 15px 25px;
  background-image: linear-gradient(to right, #CC2E5D, #ff5858);
  border-radius: 8px;
  color: #fff;
  font-size: 18px;
  font-weight: 700px;
  box-shadow: 3px 3px rgba(0,0,0,0.4);
  transition: 0.4 ease-out;

  /* &hovers{
    box-shadow: 6px 6px rgba(0,0,0,0.6)
  } */
}
.modal-overlay{
  position:absolute;
  top:0;
  left: 0;
  right:0;
  bottom:0;
  z-index: 98;
  background-color: rgba(0,0,0,0.3);
}
.instructions{
  position: fixed;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 16px;
  padding: 25px;
}
.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to{
  opacity:0;
}
.slide-enter-active,
.slide-leave-active{
  transition: transform 0.5s;
}
.slide-enter,
.slide-leave-to{
  transform: translateY(-50%) translateX(100vw);
}
.card{
  width: 18rem;
  margin: auto;
  padding: 10px;
  box-shadow: 3px 3px 3px;
  text-align: center;
}

#gameTop{
  margin: 70px 20px 70px 20px;
  text-align: center;
}

.categoryTitle{
  text-decoration: underline;
}

.animate-text{
  text-transform: uppercase;
    font-weight: 900;
    background-image:linear-gradient(
        -225deg,
        #3e2989 0%,
        #8736de 29%,
        #3313ff 67%,
        #153cdb 100%
    );
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    /* display: inline-blocks; */
    font-size: 90px;
}
@keyframes textclip {
    to {
        background-position: -200% center;
    }
}
ul{
  list-style: none;
  padding: 0;
  text-align: center;
}
  ul li{
    padding-bottom: 10px;
  }
  #responses ul li{
    display: inline-block;
    margin: 20px 10px;
  }
  footer{
    position:fixed;
    bottom:0;
    background-color: rgb(24, 24, 78);
    width:100%;
    height:50px;
    bottom:0;
    left:0;
    text-align: center;
    padding:15px;
  }
</style>
