import whispy from './assets/whispy.mp4';
import poem from './assets/poem.jpg';
import tims from './assets/tims.jpg';
import boat from './assets/boat.jpg';
import './App.scss';
import { useState } from 'react';



function App() {
  const [playing, setPlaying] = useState(true);

  return (
    <div className="App">
      <div className="header">
        <video id="bgvid" src={whispy} muted autoPlay="true" loop="true" className="header_bg" alt="whispy sky" />
      </div>
      <div className="paper_container">
        <div className="paper">
          <h1>Hello again :)</h1>
          <button className="icon-button" onClick={() => {
            if (playing) {
              document.getElementById('bgvid').pause()
            } else {
              document.getElementById('bgvid').play()
            }
            setPlaying(!playing);
          }}>
            ☃️
          </button>
          <p>I'm hoping that the background doesn't make you dizzy (if it does click the snowman). Originally I was going to do something with 3D art...</p>
          <p>Laying outside and looking at the sky thinking "how can I make that?", I realized that sometimes the world itself is a better source of beauty. So we have some footage I took laying in a snow bank while my hands froze off ❄️🤣</p>
          <div className="spread">
            <h2>Feb 18th</h2>
            <h2>nightmorning 🌙</h2>
          </div>
          {/* todo make nightmorning right side */}
          <p>Always find myself overthinking these responses. It could be a simple letter, but it has now transitioned into another website with two songs jajaja. The songs started on the 15th after reading your letter but before my reply on WhatsApp. I'm hoping they can be another form of expession to complement the typing.</p>
          <p>Tonight I was practicing some songs to play for my dad's 60th birthday. Coming up this weekend (21st) and i'm going to do the <a href="https://www.youtube.com/watch?v=lP94PlEtsEQ">long cool woman in a black dress</a> song :p.</p>
          <p>It's late now, so I am just going to write a layout, and then think while I fall asleep.</p>
          <br />
          <p>Also!! Two questions I have for you.</p>
          <ul>
            <li>Do you want to avoid WhatsApp and use something with better privacy? I've started using Signal as of late</li>
            <li>How do you feel about TFT being a public website? Would you prefer if it required a password. Also, what about the ability to contribute yourself, how interested in that would you be? Would you want me to build an interface for creating / or would you be interested in coding the website itself? I am starting to like the idea of a world existing in TFT, a proper virtual space! Definitely needs to be somewhat time bound though so it's easy to tell when there is something new. I still love the original TFT btw, thank you for all the awesome stuff you put on there! I only moved here for the promise of endless possibilites jajaja</li>
          </ul>
          <div className="spread">
            <h2>Feb 16th</h2>
          </div>
          <p>hey Vi!</p>
          <p>tonight I was listening to music / videos on the TV. There was a guy doing a concert in Berlin with these covers of Radiohead on piano, and it inspired me to watch FKJ ahaha</p>
          <p>but after that this Brisbane artist was doing a jam thingy and started playing a hiatus kaiyote song (borderline with my adams), so I went on a hiatus kaiyote binge and started dancing alone</p>
          <p>made me remember, at one point you said something about dancing being healthy. and i just found it really good for my soul to dance for a bit</p>
          <p>unrelated, but I literally just now (writing this) got a flashback to a trip experience in toronto where I went over a line of burning out.</p>
          <p>it was a weird feeling where things like dancing started to feel not so good and I went into a scary place. I was completely fine, but I guess i'm just thinking of it now because dancing alone will not cure my problems :p</p>
          <p>[added after] some weird microsecond thought process where I believed dancing to be a potential solution to all problems</p>
          <br />
          <p>(i cried right here)</p>
          <br />
          <p>regardless, some dancing is definitely a positive. maybe some crying is a positive too</p>
          <p>I just hold everything in and it isn't healthy. Writing this just now has helped me shed some tears. I went through so many emotions in such a short period and it was wild.</p>
          <p>My plan of writing tonight was not this aha, so it's unexpected.</p>
          <p>I'm very rarely able to let myself cry alone... So thank you for existing at a level where I can send you this.</p>
          <p>Don't worry that I cried. It was actually a good cry and I feel really relaxed now.</p>
          <p>Sending a post cry hug / cuddle up mood &#60;3</p>
          <div className="spread">
            <h2>Feb 21st</h2>
            <h2>9:00pm</h2>
          </div>
          <p>It is dark here and we are currently driving home from up north. Except in my head I am somewhere else.</p>
          <p>Still in Picos listening to eric clapton as we drive through the mountains at night. The day we climbed to Bulnes in search of cheese 🤣.</p>
          <p>A little wined and fatigued from our long hikes and cheese platter experience.</p>
          <p>You are beside me focused on getting us home safely. Turn after turn, wind after wind... we are so far away from the air bnb.</p>
          <p>I remember how cute you looked driving. Something about the determination you had made my heat soar. It's crystal clear now as I drive home in the dark writing this. I feel like I can almost reach over and touch you.</p>
          <p>I was so ready to cuddle up in a ball with you that night, and it is the exact feeling I have now. Amazing how vivid that memory feels.</p>
          <p>Thank you for keeping us safe and being a trooper when we were so tired!</p>
          <p>It was my dad's 60th birthday today so I am a little drunk :p</p>
          <p>This last week has been a little hectic, working all day and then trying to design a movie / music system from scratch for the present. Also practiced the long cool woman in a black dress song and relaxed occasionally in order to not burn out.</p>
          <p>I kept thinking about you in a black dress when I sang it ahaha</p>
          <p>it's amazing how different working is from school. It's great sometimes because I feel like I am actually doing something productive / meaningful. But it also takes all my time :o</p>
          <p>I wonder what it would be like if I could find a way to never sleep and get some time to do all the random things I want to.</p>
          <p>Is this why you're such a night owl?</p>
          <div className="spread">
            <h2>Feb 22nd</h2>
            <h2>00:17am</h2>
          </div>
          <p>made it back to Guelph. I reflected on life a bit in the car.</p>
          <p>the weirdest part was coming back to my room though. we've been away for a week and a half now, and it's a completely different perspective when you come back to look at your life from a different view</p>
          <p>humans are creatures of habit. we tend to get ourselves in routines. so having the chance to be out of the routine and observe it in a new way is a great way to learn</p>
          <p>im my case: this room is a mess, needs to be cleaned a lot. and I also need to start being more independent / doing whatever the fuck.</p>
          <p>Closing the door and drawing / reflecting. Pouring my heart out onto paper. Perhaps freely talking to you and starting to learning Spanish again</p>
          <p>there is a pile of your letters on my desk. Makes me so happy everytime I see the space sticker or the birdie to know you're are out there</p>
          <p>I find it really funny to imagine that if my parents ever got curious to the level of deciding to snoop... one of the very first things they would read is the amazon note that says "I will make love to you" 🤣</p>
          <p>There is also a box / letters I have written to you. They were mailed before Christmas but ended up finding their way back to me. The postman didn't do the stamps right or some shit even though I paid him e__e</p>
          <p>When I got the package back it really put me into confusion. I started questioning if what I had written in some of the messages was the right thing, my mental state had changed since the time I sent it, and also certain parts of it would no longer make sense with the timing of the package. I'm sorry you never got your Christmas / birthday present 🥺</p>
          <p>It brought new light to see that you also had messages that never made it.</p>
          <p>After seeing those I have decided to include some comments with the original package, and send it again.</p>
          <p>I think this time it will make it :)</p>
          <div className="spread">
            <h2>Feb 22nd</h2>
            <h2>11:02pm</h2>
          </div>
          <p>Tonight I printed off your letter and went through it with a pen to help me reply. Underlining significant parts made it easier to group all the different ideas happening and keep them sorted. Made me imagine the thought bubble / web chat idea again. We talked about it back in August. Organizing thought into streams in order to have a different flow for the ideas. Making communication less linear, but instead like a mind map, where similar ideas are grouped together.</p>
          <p>It was also nice to have the bear hugs printed out. Something about having them on paper now makes me warm / cozy</p>
          <p>ʕっ•ᴥ•ʔっ ʕっ•ᴥ•ʔっ ʕっ•ᴥ•ʔっ</p>
          <br />
          <p>I'm still looking for an answer. Convinced that I need to understand everything to make a reply.</p>
          <p>Trying to understand 100% if we are going to be together or not. Wanting to make a reply where I can say something for sure and have things become definite. All or nothing, manic confusion. Isn't that crazy??!</p>
          <p>The last correspondence we had was about how it is okay not to know.</p>
          <p>If it happens it happens, if it doesn't then it doesn't. If we're meant to be then we'll be 🌌</p>
          <p>That message made a lot of sense and brought me peace when I first read it. Yet, when I went to do this longer reply I was all confused again trying to figure out an answer.</p>
          <p>(Thank you for letting me take time to reply. I wish that I sent you this faster, but I'm also glad there was time to approach it more fully. Please feel free to take time with your reply as well &#60;3)</p>
          <p>These letters aren't ever going to answer our situation fully. They are simply a way to communicate. Have a conversation and share ideas... they don't need to answer what the future will be 100%.</p>
          <p>Instead they can be a place for me to tell you nice things. Share that I too dream about making love to you again.</p>
          <div className="divide">
            <p>I'm going to try and stop being so nervous about the future. Not let it get me worked up about definites but instead live in the moment. I know you've told me to relax many times before and let things be, but I haven't been very good at it ahaha. Hopefully I can start integrating it into my life better now.</p>
            <p>I found it funny that you wrote your thoughts of making love to me weren't rational, but I also found it kind of sad. Funny because I really do hope that we get to love again one day, so in a way they are rational thoughts to me? Especially if we are both thinking them jajaja. But sad because part of you does not believe they are possible? Perhaps it is an unhealthy thing to get obsessive over, but I do not think it's bad to imagine a cutie like you cuddled up with me.</p>
          </div>
          <p>All of that being said, maybe we should still discuss where we are now and where we're going a little bit.</p>
          <div className="spread">
            <h2>Feb 23rd</h2>
            <h2>10:05pm</h2>
          </div>
          <p>You talked on the phone back in September about how we should: let go, take a break, be free while COVID is here. I heard it but I could never process it. I remember responding with wanting a promise that we would try again when COVID ended, but my brain can't process what happened with that either. Perhaps promises aren't the best for these sorts of things.</p>
          <p>Since that phone call I haven't been able to let go. Let go in the way you proposed.</p>
          <p>It doesn't even feel like that conversation happened sometimes. My brain just tries to get rid of it.</p>
          <p>I somewhat understand what happened. The idea of us paused and now we wait for the universe's dance to show us the way...</p>
          <p>but I must say. I'm scared.</p>
          <p>"Right now there are too many uncertainties, but I believe we should continue being
          friends and seeing each other grow and develop through distance. Even if we ever are partners again, we cannot ensure that this will remain a constant forever. We cannot predict if we will be compatible with each other because we will remain changing. The only thing we can do is trying our best to help each other on the way. So, how do you
want to go about it? :)"</p>
          <p>I shouldn't be scared Vi. This makes sense and is a mature way to go about it. I actually think that it's best for us to not be together yet. I am personally not strong / mature enough if we were.</p>
          <p>I've been worried that if I tell you it makes sense to let go, we will drift too far apart.
One day I think it will make sense for us to be together. I hope so at least, and wish on shooting stars ☄️</p>
          <p>Can I at least hug you one more time?
regardless of what happens.</p>
          <p>I was so sure that I would see you again last time I said goodbye that I never got 100% hug closure. That said, I'm not sure if it's even possible to get hug closure with you. I think we would need to split reality into two so that we could perform an infinity hug while existing with our duplicate selves :p
jajajajajajaja </p>
          <p>ʕっ•ᴥ•ʔっ  <span style={{ fontSize: "3rem", fontFamily: "unset" }}>∞</span>   ⊂ʕ•ᴥ•⊂ʔ</p>
          <p>I know I say it a lot, but I swear on my life that I mean it. Regardless of what happens</p>
          <p>I love you Vi ! ❤️</p>
          <p>(If we were together right now I would stare into your eyes 👁️👁️   👁️👁️)</p>
          <hr />
          <p>11:05 pm</p>
          <p>"On that note, I have noticed that there are people in my life that are interested in me,
          and I like them, but I do not know. It’s a bit terrifying to let go of the idea of not
          meeting you again, so that’s fucking me up slightly. I feel like allowing any other
people into my life will turn them into a mess because I am not clear about anything."</p>
          <p>"I will also stress now that I deeply agree with something that you said in one of your
previous letters. It is fine if you fall in love with somebody else"</p>

          <p>I have no right to hold onto you Vi. If you fall in love with someone else it will be alright. Confusing completely, but it will be alright.</p>

          <p>In some weird way I need to encourage you to be free. If you find someone that makes you happy before I figure out how to exist as a human, please don't wait for me.</p>

          <p>When I first read your message about someone else... I was jealous, not going to lie.</p>

          <p>but right now it doesn't matter anymore. I can't hold on to you while not being mature enough to be with you.</p>

          <p>I just want you to be happy</p>
          <p>if I'm not able to be there for you yet, we shouldn't be making promises.</p>

          <p>I'm sorry that I've been selfish and kept this inside. I've been afraid of you disappearing.
After thinking of the infinity hug though I believe it is the right thing to do.</p>

          <p>We should let go of eachother Vi 0_0
          Not stop talking, I still love you.
But perhaps you are right about the best thing just being friends for now :(</p>

          <p>I think you have already gone through a lot of these feelings and are ahead of me...</p>

          <p>However:
          When you talked about making love / seeing eachother again :p
          you said
"the fact that this is not happening anytime soon and that this is okay"</p>

          <p>Soon ❤️ jajaja</p>

          <p>We should let go Vi. Maybe these things will never happen and we need to accept that.</p>

          <p>My heart smiles though :)
I can feel something special in the universe, and I think with the way you write "soon" that you might too.</p>

          <p>[ Going forward ]</p>
          <p>Who knows how we might get together again if we do? I wrote about some of the scenarios back in the Christmas box. Moving close to you when COVID is over. Not fully together right away.. but close enough that we can exist more naturally / slowly. It probably wouldn't take long before one of the apartments becomes redundant, but I think it would be healthier as far as not overwhelming ourselves and taking it easy.</p>

          <p>The question is, when COVID is over how would that happen. Should I coordinate with you before moving? Or do I move silently with the concept of it being completely okay if it doesn't work out. I think the silent move + living in separate apartments almost gives us enough space to retry from a world where we are just two humans existing in the same city. (it simplifies life around us so that we can focus on love instead of existence)</p>

          <p>These aren't questions that need to be answered, but I did find it interesting to think about.</p>

          <p>aside: I got up to brush my teeth after writing that last sentence. Upon coming back to crawl under my covers and continue writing to you, I got some really warm thoughts.</p>

          <p>I imagined you sitting on the bed smiling, and then laughing with you. Rolling around and playing.</p>

          <p>I've thought about you a lot, but these ones seemed to be more vivid than normal. I could feel how it would be to exist with you in a world where I am relaxed and we are comfortable. A beautiful dream 🥰</p>

          <hr />
          <p>It is now Feb 24th 00:10am</p>
          <p>I am warm under the covers wishing you were here with me.</p>

          <p>Since sending you the valentine, I have reflected back on how insane parts of how we met are.</p>

          <p>I think I said this before, but sometimes I believe the reason I ended up at Ryerson versus another school is because it allowed me to meet you.</p>

          <p>A beautiful niña españa that existed in the world but was only in Canada for a short period of time. Only a span of four months in an entire lifetime, yet we happened to still meet. Ontop of that.. we met on a fucking roof 😂</p>

          <p>I went up to the roof randomly with the soul purpose of meeting new friends, and then before I knew it we were up to 4am playing piano jajaja.</p>

          <p>Next was the boat ticket. I don't think this was as significant to you, but I think it was one of the big reasons I got out of my comfort zone enough to ask you out with me.</p>

          <p>A family friend had given me two boat tickets randomly, and I needed someone to enjoy the boat with me. I imagined it would be really wholesome to take you.</p>

          <p>jajaja, a thought came with the memory of the boat ride. You never made it on the boat because you were busy, but I still remember it clearly as it was a very empty boat (I think it was the last ride of the season)... and when I was reflecting on it just now, I was like "what if?" </p>
          <p>Then I pictured sitting on the bench except you were ontop of me and we were making out.</p>
          <p>As if somehow the reality where you came for the boat ride with me jumped straight to that 😂</p>

          <p>We lived in our reality though. The reality where you invited me to the rex 🙌. An excellent night. I'm happy that you were down to walk with me. A lot of people don't like walking if it's more than 15 minutes, but you were down and we got to experience the city fully on our way.</p>

          <p>That wasn't crazy though. The crazy part was what happened next.</p>

          <p>A girl from halfway across the world. Lucky enough that we even met... You had to bring it a step further</p>

          <p>You brought up that you were getting an airbnb to go explore Algonquin. but.. knowing that Algonquin doesn't have any bnbs in it, I am like "wait what, where?"</p>

          <p>only for you to show me on a map the location of my families cottage 🤣🤣🤣</p>

          <p>🌌🤯</p>

          <p>I was so fucking confused. It was a crazy dinosaur cottage that I didn't even realize existed. And it happened to be right next to the place my parents had chosen to retire 0_0</p>

          <p>You mentioned how you got a fever when you came back and stayed upstairs in Majadahonda.</p>

          <p>I went back to Toronto once in September and got some memories of Neill Wycik times with you. Actually went into a C2 room a few floors away from 10C2 and it was giving me crazy feels with the identical layout / view, but it was never completely independent like you said. Wycik had lots of other memories that happened there.</p>

          <p>The dinosaur cottage is different though.</p>
          <p>I can see the lights of it from the room I sleep in, and everytime I look I think back to that time.</p>

          <p>There are no other memories at the dinosaur cottage. Only that one night and day.</p>
          <p>I look over and see us on the dock meditating.</p>

          <p>I imagine you sleeping in the room at the very top. I remember you inviting me and not inviting me to sleep up there with you. I wish I could take you up on the offer now.</p>

          <p>I remember the fall colors and talking to Ron when we were the only two people awake. You and Diego being super concentrated on booking flights. Playing board games at that table.</p>

          <p>Existing alone on the dock with you alone was the most important part. Peacefulness and just talking. Meditating together.</p>

          <p>We should be friends for now Vi. Live your life and don't be afraid to fall in love. Whatever happens, happens. Whatever will be, will be</p>

          <p>It will be okay. The universe was able to connect us so far. If it is meant to be, I am confident it will be</p>

          <br />

          <p><span style={{ fontSize: "2rem" }}>don't be scared love.</span></p>

          <br />
          <br />
          <div className="poem">
            <img src={poem} alt="poem" />
          </div>
          <br />
          <br />
          <div className="pics">
            <p>ps: I got these thinking of you</p>
            <img src={tims} alt="potato" />
            <p>and this is from the boat ride</p>
            <img src={boat} alt="boat" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
