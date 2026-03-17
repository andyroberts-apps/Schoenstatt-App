import { useState, useRef, useEffect } from "react";

// ─────────────────────────────────────────────────────────────────────────────
//  HEAVENWARDS PRAYER BOOK  ·  schhw.net/en  ·  Fr. Joseph Kentenich
//
//  TO ADD AUDIO: set audioUrl to a direct-link .mp3 / .m4a URL.
//  The play button activates automatically when a URL is present.
//
//  Recommended free hosts:
//    Google Drive  → share file → change ?usp=sharing to &export=download
//    Dropbox       → share link → change ?dl=0 to ?raw=1
//    SoundCloud    → direct stream URL
//    Amazon S3 / Cloudflare R2 → public object URL
// ─────────────────────────────────────────────────────────────────────────────

const PRAYERS = [
  {
    id: 1,
    title: "Morning Consecration",
    subtitle: "Part One · Dachau, 1942–1944",
    category: "Daily",
    source: "http://schhw.net/en/chapter_02.htm",
    audioUrl: null,
    text: `GREETING
Father, I may awake with new strength
to rekindle my love.
Let me joyfully greet you
together with all your Schoenstatt.

We are united in the shrine
where the flames of our hearts
beat for our Mother Thrice Admirable
who, through us, wants to build your kingdom.

We kneel in the Holy Spirit
and sing jubilant hymns to Christ,
who sends us with her as instruments
to change the destiny of nations.

THANKSGIVING
We give you thanks for all the gifts
which we have received in such abundance:
for choosing Schoenstatt
as the place of Christ's rebirth

and the place where you radiate into the world
the glories of our Mother,
so that streams of love may pour forth
to warm cold hearts.

BLANK CHECK
Use us according to your will.
Through Schoenstatt may the wide halls
of the holy Church be filled again
and your praise resound to your throne.

You may use us for your work
and send us crosses, suffering and hardship;
whether we meet with failure or success
we want to proclaim your love.

INSCRIPTIO
May what you have foreseen for us
be realized in every moment of our lives.
We have but a single longing:
Lead us according to your wise plans.

Our ideal shall shine before us
and form our entire lives.
For this you have created us in love;
for this we strive with all our strength.

Let us glow like brands of fire
and joyfully go forth to the nations,
giving witness to redemption
and jubilantly leading all people to the Triune God.

CONFIDENCE
When we consider our own strength
we lose all hope and confidence.
Mother, we stretch out our hands to you
and ask for your many gifts of love.

Even in storms and dangers
you will always remain faithful
to the covenant you have sealed with us
and enriched with countless graces.

MORNING OFFERING
What I bear and endure,
what I say and what I dare,
what I think and what I cherish,
all the merits that I gain,
what I direct and what I conquer,
all my joys and all my sorrows:
what I am and what I have,
I give to you as a gift of love.
Use it so that the holy stream of graces
flowing richly from the shrine
may fill the souls of those
who have given their hearts to Schoenstatt
and gently lead there
all those whom you wish to choose in kindness.
Accept everything that our efforts may be fruitful
which we dedicate to the Trinity.

BLESSING
May God's blessing come upon all those
who have consecrated themselves entirely to Schoenstatt
and bring them happiness and salvation
here and in eternity.
Amen.`,
  },
  {
    id: 2,
    title: "After the Angelus",
    subtitle: "Part One · Dachau, 1942–1944",
    category: "Marian",
    source: "http://schhw.net/en/chapter_05.htm",
    audioUrl: null,
    text: `Mother, the Lord chose you
to be his helpmate for the salvation of the world.
As a bride and deaconess
you stand faithfully at his side at all times.
In the power of your virginity
you are the One who crushes the serpent.

In silent service you prepare him
as the sacrificial gift.
(Hail Mary...)

As the sacrificing handmaid
you offer him in the temple to the Father.
(Hail Mary...)

With him, you place yourself on the altar of the cross
as a sacrifice for us all.
(Hail Mary...)

Through you he gives as the fruit of sacrifice
graces to all who seek them.

Father, we humbly ask you:
May the light of faith glow within us,
that we might see our Mother clearly
and place our trust in her as Mediatrix.
Grant that, like her and as is pleasing to you,
we are always joyfully ready
to offer ourselves in selfless service
as instruments for the salvation of the world.
Thus may we break the power of the dragon
who constantly enkindles hate and discord.
We ask this through Christ, who to your glory
gives us a share in his mediation.
Amen.`,
  },
  {
    id: 3,
    title: "Evening Consecration",
    subtitle: "Part One · Dachau, 1942–1944",
    category: "Daily",
    source: "http://schhw.net/en/chapter_08.htm",
    audioUrl: null,
    text: `Father, after the day's burden and toil,
we come to seek rest in you,
who have guided us
and chosen us as instruments.

THANKSGIVING
Praise and thanks be given to you,
who accompanied us today
and accomplished through us
deeds which brought you great joy.

Our Mother's hand held us fast in loyalty,
never leaving us alone,
for it is to us, as the Lord's bride
that you have entrusted your work.

All the blessings that flowed to us today
and were showered upon us from the altar,
carried us majestically and nobly
like a mighty ocean of grace.

CONTRITION
Father, may the Savior's Precious Blood
atone for everything
which grieved your fatherly heart
because we did not love you enough.

Heed the pleas of our Mother
and let her be our advocate.
Kindly accept her merits
and look on us with a father's mercy.

Our hearts were often obstinate
when the world enticed us.
We were often inattentive
when you expressed your wishes.

PRACTICE OF DYING
The depths of our souls are laid bare
before the eyes of our Lord
who will one day appear as Judge
and assemble us for the judgment of the world.

We now freely detach ourselves
from the things which still enslave us.
In Christ and in childlike spirit
we surrender ourselves entirely to you.

We are truly sorry for our sins
and immerse our guilty hearts
into the ocean of your love,
reconsecrating them entirely to you.

PETITION
Let us rest in your protection.
Be our defense and stronghold
against drives and feelings
and Satan's evil play.

Tomorrow let us rise at the appointed hour,
refreshed and in good health,
and in the spirit of service
dedicate our strength and time to you.

Mother, inscribe us in your heart
and lead us with you heavenwards.
We loyally renew the covenant
which we sealed in that hour of grace.

BLESSING
May God's blessing come upon all those
who have consecrated themselves entirely to Schoenstatt
and bring them happiness and salvation
here and in eternity.
Amen.`,
  },
  {
    id: 4,
    title: "Accept, O Lord",
    subtitle: "Part One · The Blank Check Prayer",
    category: "Covenant",
    source: "http://schhw.net/en/chapter_09.htm",
    audioUrl: null,
    text: `Accept, O Lord, through my Mother's hands,
the entire gift of my royal freedom.
Accept my memory, my senses and my mind,
accept everything as a pledge of love.

Accept my whole heart and my whole will
so that my genuine love find satisfaction.
My greatest joy is to return to you
everything you have given me without reserve.

Use all of it in whichever way you please;
I only ask that you let me love you.
Help me to believe both far and near
that you love me as the cherished apple of your eye.

Grant me the graces that will powerfully carry me
to face the things I cannot dare on my own;
grant me a share in the fruitfulness
which your love bestows on your Bride.

Let me become fruitful for Schoenstatt
and let my life became a creative Yes
for everything you have planned in kindness
for the salvation of souls through Schoenstatt.

Then I am rich, abundantly rich;
no greater happiness could be mine.
There is nothing more I could desire:
I accept and love whatever you decide.

My Lord and my God, take everything that hinders me
and everything that diminishes my great love for you.
Give everything that increases my love for you
and take from me my very self if it disturbs this love.
Amen.`,
  },
  {
    id: 5,
    title: "Accept, O Lord, My Entire Freedom",
    subtitle: "Koblenz Prison · October 28, 1941",
    category: "Covenant",
    source: "http://schhw.net/en/chapter_51.htm",
    audioUrl: null,
    text: `Accept, O Lord, my entire freedom,
my memory, my understanding, my entire will
and my whole heart.
You have given everything to me;
I give everything back to you without reserve;
do with it what you will.
Give me but one thing:
your grace, your love, your fruitfulness—
your grace,
that I may joyfully submit to your wish and will;
your love,
that I may always believe, know
and sometimes even feel
that I am loved as the apple of your eye;
your fruitfulness,
that in you and Our Lady
I may become genuinely fruitful
for our common task.
Then I am more than rich, and will want nothing more.
Amen.`,
  },
  {
    id: 6,
    title: "Adsum!",
    subtitle: "Gestapo Prison, Koblenz · October 1941",
    category: "Covenant",
    source: "http://schhw.net/en/chapter_50.htm",
    audioUrl: null,
    text: `"Adsum" — Latin: "Here I am." "I am ready."
Written in solitary confinement, Koblenz, October 1941.

Mother, do you want my work? Adsum!
Do you want the slow wasting away of all my mental powers? Adsum!
Do you want my death? Adsum!
Only see to it that all whom you have entrusted to me
love Our Lord and learn to live and to die for him.`,
  },
  {
    id: 7,
    title: "I Beg You, Father, for All the Cross and Suffering",
    subtitle: "Part One · The Inscriptio Prayer",
    category: "Covenant",
    source: "http://schhw.net/en/chapter_11.htm",
    audioUrl: null,
    text: `I beg you, Father, for all the cross and suffering
that you hold ready for me.

Free me from all inordinate self-will
so that I can fulfill your slightest wishes.
Make me like my Bridegroom;
only then will I be happy and abundantly blessed.

There is nothing you may never send me—
do everything to break my self-centeredness
so that Christ alone may live and work in me
and in him I bring you only joy.

Father, you will never send me cross or suffering
without generously giving me the strength I need to bear it.
The Bridegroom in me helps me carry everything
and the Mother keeps watch, so we are always three.

But if you want to preserve me from suffering—
I only want to comply with your fatherly wish—
then I pray: Keep all misfortune far from me;
you are alone for me life's guiding star.

Until now I myself have been at the helm,
too often forgetting you in the ship of my life.
I only turned to you helplessly now and then
to make sure my little ship would proceed according to my plan.

Father, let me finally be entirely converted!
In my Bridegroom I want to proclaim to all the world
that the Father has the tiller in his hands
even when I do not know the goal nor know the way.

I now let you lead me blindly;
I only want to choose your holy will.
I will go with you through darkness and night
because your love always keeps watch over me.
Amen.`,
  },
  {
    id: 8,
    title: "Almighty God, Do You Want to Take This Child?",
    subtitle: "Part One · Prayer for the Movement",
    category: "Intercession",
    source: "http://schhw.net/en/chapter_12.htm",
    audioUrl: null,
    text: `Almighty God, do you want to take this child from me?
Will it please you to paralyze its strength?
Is it meant to be disfigured in your sight,
retaining but a pale glimmer of life?

Out of love you gave me this child,
and gave me the strength to dedicate my entire life to it.
Do you want to see it dead in my arms?
Should it go through life a cripple?

Then I ask you: Carry out your plans,
for to you alone goes out my deepest longing.
I only seek you, Father, and your will,
am happy when you fulfill your wishes.

Accept the child which you endowed with life
and to whom you let me give the entire strength of my love.
I joyfully place it back into your hands,
its future destiny and its happiness in life.

But if in the fullness of your mercy
you want to return it to me and the world,
allowing me to further embrace it with my love,
if as a ransom you only want to see my plea,
my childlike and heroic trust,

then I will hate all half-heartedness and laziness
and never disgracefully cease by either day or night
to pray and beg with unfailing confidence:
Let your child soon see miracles!

May its life become a faithful reflection
of our Mother's life here on earth,
so that through it the splendor of her rays
may be revealed to our ailing times.

I will not stop imploring full of trust
that your plans be fulfilled;
you may put my faith and my trust to the test—
I will believe in our mission heroically.

And if I myself may not see
the prospering of your child in your presence,
then I, like Moses, will remain on the mountain...
Only grant this child the happiness of the holy land!
Amen.`,
  },
  {
    id: 9,
    title: "Father, Look Upon Our Family",
    subtitle: "Part One · Community and Solidarity",
    category: "Intercession",
    source: "http://schhw.net/en/chapter_13.htm",
    audioUrl: null,
    text: `I daily offer them and all their strivings,
their holy and vigorous life of sacrifice and love:
  Father, look with mercy on our family
  and for its sake reveal your wondrous love.

When temptation threatens to overcome me
and Satan and the world do not depart:
  Father, look with mercy on our family
  and for its sake reveal your wondrous love.

When I am threatened by life's uncertainties
and my enemies scatter bombs and shells:
  Father, look with mercy on our family
  and for its sake reveal your wondrous love.

When persecution constantly pursues me
and every meadow becomes a desert:
  Father, look with mercy on our family
  and for its sake reveal your wondrous love.

When courage and trust fail me
because I face tasks beyond my strength:
  Father, look with mercy on our family
  and for its sake reveal your wondrous love.

When Satan strikes with fierceness and cunning
to erase God from my life:
  Father, look with mercy on our family
  and for its sake reveal your wondrous love.

When I feel poor and naked before God
and yawning chasms open at my feet:
  Father, look with mercy on our family
  and for its sake reveal your wondrous love.

When life's last hours toll for me
and my conscience raises bitter accusation:
  Father, look with mercy on our family
  and for its sake reveal your wondrous love.

When I stand before God's judgment seat
and must fear the severity of judgment:
  Father, look with mercy on our family
  and for its sake reveal your wondrous love.

I am so intimately united with my own
that we have always seen ourselves as one.
Their sanctity is my life and inspiration;
I would gladly give my life for them.`,
  },
  {
    id: 10,
    title: "Hold the Scepter in Your Hand",
    subtitle: "Part One · For Schoenstatt",
    category: "Marian",
    source: "http://schhw.net/en/chapter_14.htm",
    audioUrl: null,
    text: `Hold the scepter in your hand;
Mother, protect your Schoenstatt Land.
There you alone are Queen;
cause every foe to flee.

Create a paradise for yourself there
and hold the dragon at bay.
Woman of the Sun, step forth with light
and ascend to the heights of the noonday sky.

Build from here a world
which is pleasing to the Father,
as our Savior once implored
so longingly in prayer.

May love ever reign there
together with truth and justice
and a unity which does not become massmindedness
nor lead to inner slavery.

Reveal your power
in the dark and stormy night.
Let the world see your active hand
and stand in admiration before you,

so that it speak your name with love,
profess loyalty to your kingdom,
fearlessly carry your banner far and wide
and victoriously defeat every foe.

Let Schoenstatt remain your favorite place,
a stronghold of apostolic spirit,
a leader on the way to holy battle,
a source of everyday sanctity,

a firebrand glowing for Christ,
scattering sparks of searing brightness
until the world, a sea of flames,
burns to the glory of the Trinity.
Amen.`,
  },
  {
    id: 11,
    title: "Prayer in Time of Need",
    subtitle: "Part Two · For Crisis and Suffering",
    category: "Intercession",
    source: "http://schhw.net/en/chapter_15.htm",
    audioUrl: null,
    text: `Mother, take us caringly beneath your mantle,
that we may always live as citizens of heaven.
Preserve us from hunger, epidemics and fire;
Preserve us who turn to you in time of dire need.

Speak to your Son as you once did on earth
when he came to our aid in need and distress—
"Lord, they have no wine and no food"—
then he will certainly hear our prayer.

He chose you as the second Eve;
you shall save what the first Eve lost.
Just as she drew us into ruin,
from you stream forth the rays of eternal salvation.

Unfold today the richness of your motherly heart
wherever diabolical forces are powerfully at work.
Reveal the fullest extent of your might and kindness
as the Helpmate of the Lord.

Show yourself to all the world as the Great Sign
which neither Satan's cunning nor earthly sorrow can endure.
Let the nations find protection and salvation in you
and joyfully proclaim you salvation's Mediatrix.

Our affliction, too, has increased so enormously
that without your help we must succumb.
You alone can save us from perdition—
come and see us gathered around you with our pleas.

United with your Son, be the one who rescues us
from the fury of hell and the tempests of our times.
We want to courageously spread your name
and lead all people to your shrine,
so that, with you, they jubilantly and lovingly worship the Triune God
both here and high in heaven above.
Amen.`,
  },
  {
    id: 12,
    title: "Prayer of the Leaders",
    subtitle: "Part Two · For Schoenstatt's Mission",
    category: "Intercession",
    source: "http://schhw.net/en/chapter_16.htm",
    audioUrl: null,
    text: `Mother, implore for our small community
in your faithful, motherly way,
that we may always be the soul of Schoenstatt
and dedicate to it our whole life's strength.

Let us believe in Schoenstatt and Pallotti
and let no one deprive us of this sign of unity.
Let us form the great image of the human person and community
which fulfills the Father's will.

May the difficult sacrifices we joyfully make
reach up to you as a living plea
to lavish kindness, faithfulness and power
and keep watch over your favorite creation.

Let the spirit of true freedom blossom there.
Draw to it only those who are chosen.
Grant it the Inscriptio as its lasting legacy,
as the fruit of ardent, burning love of God.

Grant it the qualities of leadership it needs
to stride securely through our times,
and on the hard-fought path of life
give it a generous portion of the grace of contemplation.

Use it as your faithful instrument
wherever the spirit of Satan must strongly be defied.
Transform it into Christ's loyal guard
which always stands out in apostolic spirit.

May it proclaim love for the Blessed Trinity
and bind its finest laurels to the cross.
Through it, bless the Church with genuine everyday sanctity
in answer to the needs of our times.

Help it to spread throughout the world
and go victoriously through all the nations
that soon there be one flock and one shepherd
leading all peoples to the Trinity.
Amen.`,
  },
  {
    id: 13,
    title: "The Shepherd's Prayer",
    subtitle: "Part Two · For Those Entrusted to Our Care",
    category: "Intercession",
    source: "http://schhw.net/en/chapter_17.htm",
    audioUrl: null,
    text: `Thrice Admirable Schoenstatt Lady,
look on those whom I entrust to you.
I must watch them stand alone in battle,
can only go my way with trust in you.

Command the turbulent storms of the times
so that their reckless fury does not increase unchecked.
Bring the devil's power and cunning to nought
and deliver my own from the curse of Eve's sin.

Silence their evil, inordinate drives;
let their entire being bow to God!
To him should belong the glow of their hearts,
to him the loyal dedication of their sacrificial love.

Help them resolutely withstand each love
which would subtly tear them from your side,
which would dull the brilliance of their purity
and wilt the crown of their virginity.

They have made a covenant with you.
May it stand as firm as if cast in bronze.
Then I will know that they are in safe and loyal hands
and will not fear the raging fury of the flood.

You will bring them all victoriously home to the Father
so that they can sing hymns to the Lamb.
I firmly believe that no one will be lost
who remains faithful to the covenant of love.

I therefore inscribe into your heart once more with blood and fire
all those I hold so dear
and proceed without fear along that path in life
which the Father's wisdom has foreseen for me.

If he chooses that my life become the ransom,
I joyfully place it at his disposal.
In return, may all who have dedicated themselves to you and Schoenstatt
live with the Blessed Trinity forevermore.
Amen.`,
  },
  {
    id: 14,
    title: "In Pressing Need",
    subtitle: "Part Two · Thanksgiving After Danger",
    category: "Petition",
    source: "http://schhw.net/en/chapter_20.htm",
    audioUrl: null,
    text: `In pressing need
you heard my prayer,
in bitter sorrow
my childlike plea.
Despite my failings and my guilt
you answered with mercy.

When hurt and anxious,
when bombs screamed
and fire threatened,
you sheltered me
with your might
which kindly guards me.

Through years of storm
and endless peril,
you faithfully
and steadfastly
cared for each of my own,
those united with you.

Let me give thanks
and proclaim your praises
to every circle,
simply,
always,
and in the spirit of service.

And filled with trust
my only wish
is to loyally fulfill
the Father's will,
even if the final judgment
be upon us.

He will guide me
through every darkness
and lead me by the hand,
despite the turmoil of our times,
homewards
into the land of the Father.

After every tear has been shed
he will unite me there
with those I love
and have remained faithful.
There we will see the Lamb
and stand in the presence of God.
Amen.`,
  },
  {
    id: 15,
    title: "Let Me Give Thanks for Everything",
    subtitle: "Part Two · Brief Thanksgiving",
    category: "Marian",
    source: "http://schhw.net/en/chapter_21.htm",
    audioUrl: null,
    text: `For everything, yes for everything, let me give heartfelt thanks,
clinging to you, Mother, with tender love.
What would have become of us without you
and without your motherly care!

Because you delivered us from great need
and bound us to yourself in faithful love,
I will give you thanks, be grateful forevermore
and dedicate myself to you with undivided love.
Amen.`,
  },
  {
    id: 16,
    title: "I Praise You, Mother",
    subtitle: "Part Two · Gratitude",
    category: "Marian",
    source: "http://schhw.net/en/chapter_22.htm",
    audioUrl: null,
    text: `I praise you, Mother, as your child
for the gifts which loyal hearts have sent me.
You have awakened them in your kindness
and richly reset the table of my own.

With gratefulness I return the offering of love
into your kind and motherly hands,
and pray with all my heart: Tell me how it best be shared
to bring you honor and joy.

Come, Mediatrix of all gifts and graces,
with your Son accept the invitation to be our guests,
tenderly uniting us with a family bond—
from heart to heart and from land to land.

We want to selflessly serve your work
with steadfast hearts and joyful bearing.
To you we leave the care for health and food
on our pilgrimage through life.

Such counsel Our Lord once gave to us:
Seek first the kingdom of God in word and deed
and the Father will grant you all other things besides;
only never give him rest with your childlike plea!

Teach us through these gifts to ascend to you
and to bow in reverence before the Eternal Love
which opens to us daily more and more
the inexhaustible ocean of God's mercy.

Implore God's richest blessing for all those
who work and sacrifice for our well-being.
Grant them in the difficult paths of life
a generous measure of your love and grace.
Amen.`,
  },
  {
    id: 17,
    title: "The Home Song",
    subtitle: "Hymn of the Home",
    category: "Hymns",
    source: "http://schhw.net/en/chapter_25.htm",
    audioUrl: null,
    text: `Do you know the land so warm and dear
which Eternal Love has built itself:
where noble hearts beat with affection
and bear with each other in the joy of sacrifice;
where they glow and shelter one another
and flow as one into the heart of God;
where streams of love well forth with might
to quench the thirst of the world for love?

REFRAIN
This wonderland is known to me—
It is the meadow radiantly lit by Tabor's sun,
where our Three times Admirable Lady reigns
in the midst of her favorite children,
loyally rewarding each gift of love
with the manifestation of her glory
and immeasurably abundant fruitfulness:
It is my home, my Schoenstatt Land!

Do you know the land so rich and pure,
the reflection of Eternal Beauty:
where noble, stalwart souls
espouse themselves to the Lamb of God;
where bright eyes radiate warmth
and kind hands ease hurt and pain;
where they, untainted, are always folded in prayer
to banish the power of Satan?
(Refrain)

Do you know the land, like heaven itself,
the so ardently longed-for kingdom of freedom:
where magnanimity and sense of the fitting
overcome the downward pull of nature;
where the slightest wishes of God are binding
and receive in answer a joyful decision;
where they, in accord with love's fundamental law,
are always victoriously put into action?
(Refrain)`,
  },
  {
    id: 18,
    title: "My Queen, My Mother",
    subtitle: "Appendix · Classic Marian Consecration",
    category: "Marian",
    source: "http://schhw.net/en/chapter_41.htm",
    audioUrl: null,
    text: `My Queen, my Mother,
I give myself entirely to you;
and to show my devotion to you,
I consecrate to you this day,
my eyes, my ears, my mouth, my heart,
my whole being without reserve.
Wherefore, good Mother,
as I am your own,
keep me, guard me,
as your property and possession.
Amen.`,
  },
  {
    id: 19,
    title: "Prayer of Confidence",
    subtitle: "Dachau, 1943 · Most-loved Schoenstatt prayer",
    category: "Marian",
    source: "http://schhw.net/en/chapter_42.htm",
    audioUrl: null,
    text: `I trust your might, your kindness, Mother dear,
I do believe that you are always near.
Whatever happens, Mother mild,
I blindly trust in you and in your Child.

— — —

I trust your might, your kindness, Mother dear,
I do believe that you are always near.
Schoenstatt's great Queen, O Mother mild,
I blindly trust in you and in your Child.`,
  },
  {
    id: 20,
    title: "Providentia Divina",
    subtitle: "Appendix · Divine Providence",
    category: "Covenant",
    source: "http://schhw.net/en/chapter_43.htm",
    audioUrl: null,
    text: `You know the way for me, you know the time,
into your hands I trustingly place mine.
Your plan is perfect, born of perfect love.
You know the way for me, that is enough.`,
  },
  {
    id: 21,
    title: "With Heartfelt Love",
    subtitle: "Appendix · Thanksgiving",
    category: "Marian",
    source: "http://schhw.net/en/chapter_44.htm",
    audioUrl: null,
    text: `With heartfelt love, I thank you, Mother dear,
with you to guide me I need have no fear.
When all around seemed dark and drear and gray,
you stood as beacon for a brighter day.
Your smile illumined every wakeful hour,
you did uphold me with your gentle power.
Thanks, a thousand thanks to you, to God shall be
now and for all eternity.
Amen.`,
  },
  {
    id: 22,
    title: "Let Us Walk Like You Through Life",
    subtitle: "Appendix · Verse of the Hymn of the Instruments",
    category: "Marian",
    source: "http://schhw.net/en/chapter_45.htm",
    audioUrl: null,
    text: `Let us walk like you through life,
let us mirror you forever,
strong and noble, meek and mild,
peace and love be our endeavor.
Walk in us through our world,
make it ready for the Lord.`,
  },
  {
    id: 23,
    title: "Morning Offering",
    subtitle: "Appendix · Alternate Version",
    category: "Daily",
    source: "http://schhw.net/en/chapter_46.htm",
    audioUrl: null,
    text: `The things I suffer and I bear,
the things I say and what I dare,
whate'er I think, whate'er I love,
the merits coming from above,
what I take on, am fighting for,
what brings me joy, inflicts a sore,
my very life and all I have
I give to you as a gift of love—
to swell the stream of heavenly grace
that's flowing from your holy place,
to fill with Schoenstatt zeal all those
who at your feet their hearts repose,
to gently lead all to the Shrine
who will be yours by choice benign;
that our every word and every deed
may please the Triune and succeed.`,
  },
  {
    id: 24,
    title: "Mother Thrice Admirable, Mother of Grace",
    subtitle: "Written by Father Kentenich, 1916",
    category: "Marian",
    source: "http://schhw.net/en/chapter_48.htm",
    audioUrl: null,
    text: `Mother Thrice Admirable, Mother of Grace,
Teach us your enemies bravely to face,
Never regarding their number and might,
Spreading your love over the earth's dark night,
So that the world through you made new
Pay to your Son His homage due.
Mother with your Child divine,
Make our country wholly thine.
Help that never it will cease
to follow you and gain God's peace.
Mother and Child united in love
will restore it with grace from above.`,
  },
  {
    id: 25,
    title: "O Mother, in Your Holy Heart",
    subtitle: "Appendix · Inscription Prayer",
    category: "Marian",
    source: "http://schhw.net/en/chapter_49.htm",
    audioUrl: null,
    text: `O Mother, in your holy heart
deeply inscribe each name
And as a sign that we are yours
write it with blood and flame.
In love and childlike gratitude
your name shall also be
Deeply inscribed within my heart
for all eternity.`,
  },
  {
    id: 26,
    title: "Prayer to the Holy Spirit",
    subtitle: "Milwaukee, Pentecost Sunday 1965",
    category: "Petition",
    source: "http://schhw.net/en/chapter_52.htm",
    audioUrl: null,
    text: `Holy Spirit,
you are the soul of my soul.
I humbly adore you.
Enlighten me, strengthen me,
guide me, comfort me.
Reveal your wishes to me
as far as this is in accordance
with the will of the Eternal Father.
Show me what Eternal Love wants of me.
Show me what I should do.
Show me what I should suffer.
Show me what I should humbly and
thoughtfully accept, bear and endure.
Holy Spirit, show me your will
and the will of the Father,
for I want my whole life to be nothing else
than a continuous, an everlasting yes
to the wishes, to the will of God,
the Eternal Father.`,
  },
  {
    id: 27,
    title: "O Holy Spirit",
    subtitle: "Appendix · Brief Invocation",
    category: "Petition",
    source: "http://schhw.net/en/chapter_53.htm",
    audioUrl: null,
    text: `O Holy Spirit, with glowing flame
inspire us today.
Unite all souls and form one heart
and show the Father's way.`,
  },
  {
    id: 28,
    title: "Home Shrine Prayer",
    subtitle: "Milwaukee, May 1965",
    category: "Home",
    source: "http://schhw.net/en/chapter_57.htm",
    audioUrl: null,
    text: `My room (home) is your shrine,
where you work to the glory of the Father.
There he transforms my entire being
into the Trinity's most beloved shrine,
where the sanctuary light constantly burns
and the glow of love never dies;
where the fire of sacrifice upon sacrifice
banishes all selfishness from the heart;
where roses adorn the altar
and lilies never cease to bloom;
where paradisal breezes waft
and raise heart and mind to heaven;
where the spirit of the world cannot enter
as in the eternal city of Sion;
where peace reigns and happiness laughs
because God's angel keeps diligent watch;
where Christ rules and is triumphant
and leads the whole world to the Father.`,
  },
  {
    id: 29,
    title: "Short Prayers & Ejaculations",
    subtitle: "Schoenstatt Motto Prayers",
    category: "Daily",
    source: "http://schhw.net/en/chapter_56.htm",
    audioUrl: null,
    text: `Virgin Mary, meek and mild,
bless us with your holy Child!

Mother with your loving Son,
bless us each and everyone!

Nothing without you, MTA, nothing without us.

Mother will take perfect care.
(Mater perfectam habebit curam.)

Mother will take perfect care and be victorious.
(Mater perfectam habebit curam et victoriam.)

A servant of Mary will never perish.
(Servus Mariae nunquam peribit.)

God is Father,
God is good,
everything he does is good.

Nothing is mere coincidence;
everything comes from God's providence.

Though storm may rage and wind may howl
and lightning strike again,
I think as does the mariner's child:
My Father is at the helm.

Our way leads homewards to the Father.

Unite, O my God, all minds in truth and all hearts in love.
(Fr. Kentenich, July 8, 1910)

With hope and joy and confident in the victory
we go with Mary into the newest times!
(Fr. Kentenich, September 7, 1968)

Send us help and blessings from the shrine
and watch over us from Sion.
(cf. Ps 20:3)`,
  },
];

const CATEGORIES = ["All","Daily","Covenant","Marian","Intercession","Petition","Hymns","Home"];


export default function SchoenstattApp() {
  const [activeTab,   setActiveTab]   = useState(null);
  const [headerOpen,  setHeaderOpen]  = useState(true);
  const [openId,      setOpenId]      = useState(null);
  const [playingId,   setPlayingId]   = useState(null);
  const [progress,    setProgress]    = useState(0);
  const [filterCat,   setFilterCat]   = useState("All");
  const [search,      setSearch]      = useState("");
  // SDO state — resets checks on new day using window._todoData
  var todayStr = new Date().toDateString();
  var _saved = (window._todoData && window._todoData.date === todayStr) ? window._todoData : null;
  const [sdoItems,   setSdoItems]   = useState(_saved ? _saved.items   : []);
  const [sdoChecks,  setSdoChecks]  = useState(_saved ? _saved.checks  : {});
  const [sdoInput,   setSdoInput]   = useState("");
  const [sdoEditId,  setSdoEditId]  = useState(null);
  const [sdoEditTx,  setSdoEditTx]  = useState("");
  // notifState: null = not yet asked, "asking" = prompt showing, "granted" = scheduled, "denied" = declined
  const [notifState, setNotifState] = useState(_saved ? (_saved.notifState || null) : null);

  useEffect(function() {
    window._todoData = { items: sdoItems, checks: sdoChecks, date: todayStr, notifState: notifState };
  }, [sdoItems, sdoChecks, notifState]);

  // Returns ms until HH:MM today (negative if already past)
  function msUntil(hour, minute) {
    var now = new Date();
    var target = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute, 0, 0);
    return target.getTime() - now.getTime();
  }

  function scheduleNotifications() {
    // Noon: fire if nothing checked off yet
    var msNoon = msUntil(12, 0);
    if (msNoon > 0) {
      setTimeout(function() {
        var data = window._todoData || {};
        var checks = data.checks || {};
        var items  = data.items  || [];
        var anyDone = items.some(function(i) { return !!checks[i.id]; });
        if (!anyDone && items.length > 0) {
          new Notification("Schoenstatt - SDO Reminder", {
            body: "You haven't started your Spiritual Daily Order yet. Take a moment to begin.",
            icon: "",
          });
        }
      }, msNoon);
    }
    // 8pm: fire if anything still incomplete
    var ms8pm = msUntil(20, 0);
    if (ms8pm > 0) {
      setTimeout(function() {
        var data = window._todoData || {};
        var checks = data.checks || {};
        var items  = data.items  || [];
        var anyLeft = items.some(function(i) { return !checks[i.id]; });
        if (anyLeft && items.length > 0) {
          new Notification("Schoenstatt - Evening SDO Check", {
            body: "Some practices are still unchecked. The day is not yet over.",
            icon: "",
          });
        }
      }, ms8pm);
    }
  }

  function sdoRequestNotifications() {
    if (!("Notification" in window)) {
      setNotifState("denied");
      return;
    }
    if (Notification.permission === "granted") {
      scheduleNotifications();
      setNotifState("granted");
      return;
    }
    Notification.requestPermission().then(function(permission) {
      if (permission === "granted") {
        scheduleNotifications();
        setNotifState("granted");
      } else {
        setNotifState("denied");
      }
    });
  }

  function sdoAdd() {
    var text = sdoInput.trim();
    if (!text) return;
    var wasEmpty = sdoItems.length === 0;
    setSdoItems(sdoItems.concat([{ id: String(Date.now()), text: text }]));
    setSdoInput("");
    // Show notification prompt the first time an item is added
    if (wasEmpty && notifState === null) {
      setNotifState("asking");
    }
  }

  function sdoToggle(id) {
    var next = Object.assign({}, sdoChecks);
    next[id] = !next[id];
    setSdoChecks(next);
  }

  function sdoDelete(id) {
    setSdoItems(sdoItems.filter(function(i) { return i.id !== id; }));
    var next = Object.assign({}, sdoChecks);
    delete next[id];
    setSdoChecks(next);
  }

  function sdoStartEdit(item) {
    setSdoEditId(item.id);
    setSdoEditTx(item.text);
  }

  function sdoSaveEdit() {
    var text = sdoEditTx.trim();
    if (!text) return;
    setSdoItems(sdoItems.map(function(i) { return i.id === sdoEditId ? { id: i.id, text: text } : i; }));
    setSdoEditId(null);
    setSdoEditTx("");
  }

  var sdoDone = sdoItems.filter(function(i) { return !!sdoChecks[i.id]; }).length;
  // SDO-specific style vars (all comma-containing strings must live here, not in JSX)
  var sdoPurple  = "#a78bfa";
  var sdoIndigo  = "#818cf8";
  var sdoGrPurp  = "linear-gradient(135deg,#a78bfa,#818cf8)";
  var sdoGrBar   = "linear-gradient(90deg,#a78bfa,#818cf8)";
  var sdoChkBord = "2px solid rgba(255,255,255,0.2)";
  var sdoEditBrd = "1px solid rgba(167,139,250,0.4)";
  var sdoChecked = "rgba(167,139,250,0.04)";
  var sdoFaded   = "rgba(255,255,255,0.3)";
  var sdoBright  = "rgba(255,255,255,0.85)";
  var sdoGray    = "rgba(255,255,255,0.4)";
  var sdoRed     = "rgba(248,113,113,0.5)";
  var sdoTrack   = "rgba(255,255,255,0.08)";
  var sdoNotifBg = "rgba(167,139,250,0.07)";
  var sdoNotifBrd = "1px solid rgba(167,139,250,0.25)";
  const audioRef = useRef(null);

  var filtered = PRAYERS.filter(function(p) {
    var catOk  = filterCat === "All" || p.category === filterCat;
    var termOk = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.text.toLowerCase().includes(search.toLowerCase());
    return catOk && termOk;
  });

  var playingPrayer = PRAYERS.find(function(p) { return p.id === playingId; }) || null;

  useEffect(function() {
    var el = audioRef.current;
    if (!el) return;
    if (playingId && playingPrayer && playingPrayer.audioUrl) {
      el.play().catch(function() { setPlayingId(null); });
    } else {
      el.pause();
    }
  }, [playingId, playingPrayer]);

  function handlePlay(prayer, e) {
    e.stopPropagation();
    if (!prayer.audioUrl) return;
    if (playingId === prayer.id) { setPlayingId(null); }
    else { setProgress(0); setPlayingId(prayer.id); }
  }

  // Style variables — ALL rgba/gradient values extracted here, never inline in JSX
  var gold  = "#b48c3c";
  var gold2 = "#d4a843";
  var navy  = "#0d1b2a";
  var cream = "#e8dcc8";
  var lt    = "#f0e4c8";
  var gfont = "Georgia,serif";
  var bdf   = "blur(10px)";
  // borders
  var b1 = "1px solid rgba(180,140,60,0.07)";
  var b2 = "1px solid rgba(180,140,60,0.08)";
  var b3 = "1px solid rgba(180,140,60,0.1)";
  var b4 = "1px solid rgba(180,140,60,0.15)";
  var b5 = "1px solid rgba(180,140,60,0.2)";
  var b6 = "1px solid rgba(180,140,60,0.25)";
  var b7 = "1px solid rgba(180,140,60,0.28)";
  var b8 = "1px solid rgba(180,140,60,0.3)";
  var b9 = "1px solid rgba(180,140,60,0.35)";
  var b10 = "1px solid rgba(255,255,255,0.05)";
  var b11 = "1px solid rgba(255,255,255,0.06)";
  var b12 = "2px solid rgba(180,140,60,0.28)";
  var b13 = "1px solid rgba(100,120,140,0.2)";
  var b14 = "1.5px solid rgba(180,140,60,0.2)";
  var b15 = "1.5px solid rgba(180,140,60,0.3)";
  // backgrounds
  var bg1 = "rgba(255,255,255,0.025)";
  var bg2 = "rgba(255,255,255,0.04)";
  var bg3 = "rgba(255,255,255,0.02)";
  var bg4 = "rgba(255,255,255,0.03)";
  var c1  = "rgba(180,140,60,0.04)";
  var c2  = "rgba(180,140,60,0.05)";
  var c3  = "rgba(180,140,60,0.08)";
  var c4  = "rgba(180,140,60,0.09)";
  var c5  = "rgba(180,140,60,0.1)";
  var c6  = "rgba(180,140,60,0.12)";
  var c7  = "rgba(180,140,60,0.18)";
  var dk  = "rgba(13,27,42,0.96)";
  // gradients
  var gr1 = "linear-gradient(160deg," + navy + " 0%,#1a2744 40%," + navy + " 100%)";
  var gr2 = "linear-gradient(135deg," + c7 + "," + c1 + ")";
  var gr3 = "linear-gradient(135deg," + c4 + "," + "rgba(180,140,60,0.02)" + ")";
  var gr4 = "linear-gradient(90deg," + gold + "," + gold2 + ")";

  return (
    <div style={{ minHeight:"100vh", background:gr1, fontFamily:gfont, color:cream }}>

      {playingPrayer && playingPrayer.audioUrl && (
        <audio ref={audioRef} src={playingPrayer.audioUrl}
          onTimeUpdate={function() { var el=audioRef.current; if(el && el.duration) setProgress(el.currentTime/el.duration*100); }}
          onEnded={function() { setPlayingId(null); setProgress(0); }} />
      )}

      {/* HEADER */}
      <div style={{ borderBottom: headerOpen ? b5 : "none" }}>
        <div style={{ textAlign:"center", padding:"1.5rem 1rem 1rem", cursor:"pointer" }}
          onClick={function(){setHeaderOpen(!headerOpen);}}>
          <div style={{ fontSize:"0.62rem", letterSpacing:"0.3em", color:gold, textTransform:"uppercase", marginBottom:"0.35rem" }}>
            Schoenstatt Movement
          </div>
          <h1 style={{ fontSize:"1.5rem", fontWeight:"normal", color:lt, margin:"0 0 0.3rem", letterSpacing:"0.04em" }}>
            Covenant of Love
          </h1>
          <div style={{ fontSize:"0.6rem", color:"#445566", letterSpacing:"0.12em" }}>
            {headerOpen ? "MARY'S PROMISES & REQUESTS  [tap to close]" : "MARY'S PROMISES & REQUESTS  [tap to open]"}
          </div>
        </div>

        {headerOpen && (
          <div style={{ maxWidth:540, margin:"0 auto", padding:"0 1.2rem 1.4rem" }}>
            <div style={{ background:c1, border:b3, borderRadius:10, padding:"0.9rem 1rem" }}>
              <div style={{ fontSize:"0.58rem", color:gold, letterSpacing:"0.15em", marginBottom:"0.55rem" }}>
                THE PROMISES OF MARY
              </div>
              {[
                "It will please me to dwell in your midst.",
                "I will dispense gifts and graces in abundance.",
                "I will draw youthful hearts to myself from here.",
                "I will educate and form them.",
                "To be useful instruments.",
                "In my hands.",
              ].map(function(p, i) { return (
                <div key={i} style={{ display:"flex", gap:"0.5rem", marginBottom:"0.5rem", alignItems:"flex-start" }}>
                  <span style={{ color:gold, fontSize:"0.65rem", marginTop:"0.2rem", flexShrink:0 }}>*</span>
                  <p style={{ margin:0, fontSize:"0.68rem", color:"#a0b0c0", lineHeight:1.6, fontStyle:"italic" }}>{p}</p>
                </div>
              ); })}

              <div style={{ borderTop:b3, margin:"0.7rem 0" }} />

              <div style={{ fontSize:"0.58rem", color:gold, letterSpacing:"0.15em", marginBottom:"0.55rem" }}>
                THE REQUESTS OF MARY
              </div>
              {[
                "Prove by your deeds that you really love me.",
                "Increase your striving to the highest degree.",
                "This sanctification I demand of you.",
                "Fulfill your duties faithfully.",
                "Pray fervently.",
                "Diligently bring contributions to the capital of grace.",
              ].map(function(d, i) { return (
                <div key={i} style={{ display:"flex", gap:"0.5rem", marginBottom:"0.5rem", alignItems:"flex-start" }}>
                  <span style={{ color:gold, fontSize:"0.65rem", marginTop:"0.2rem", flexShrink:0 }}>*</span>
                  <p style={{ margin:0, fontSize:"0.68rem", color:"#a0b0c0", lineHeight:1.6, fontStyle:"italic" }}>{d}</p>
                </div>
              ); })}
            </div>
          </div>
        )}
      </div>

      {/* TABS */}
      <div style={{ display:"flex", maxWidth:540, margin:"0 auto", padding:"0.9rem 1rem 0" }}>
        {[
          { id:"heavenwards", label:"Heavenwards", sub:"Prayer Book" },
          { id:"sdo",         label:"My SDO",      sub:"Spiritual Daily Order" },
        ].map(function(tab) { return (
          <button key={tab.id}
            onClick={function(){ setActiveTab(tab.id); setHeaderOpen(false); }}
            style={{
              flex:1,
              background: activeTab===tab.id ? gr2 : "transparent",
              border:"none",
              borderBottom: activeTab===tab.id ? "2px solid " + gold : "2px solid transparent",
              color: activeTab===tab.id ? gold2 : "#556677",
              padding:"0.65rem 0.5rem", cursor:"pointer", transition:"all 0.25s", fontFamily:gfont,
            }}>
            <div style={{ fontSize:"0.88rem", marginBottom:"0.08rem" }}>{tab.label}</div>
            <div style={{ fontSize:"0.58rem", letterSpacing:"0.1em", opacity:0.7 }}>{tab.sub}</div>
          </button>
        ); })}
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth:600, margin:"0 auto", padding:"1.1rem 1rem 6rem" }}>

        {/* HEAVENWARDS TAB */}
        {activeTab === "heavenwards" && (
          <div>
            <input value={search} onChange={function(e){setSearch(e.target.value);}} placeholder="Search prayers..."
              style={{
                width:"100%", boxSizing:"border-box", background:bg2,
                border:b5, borderRadius:8, color:cream,
                padding:"0.5rem 0.9rem", fontSize:"0.8rem", fontFamily:gfont, marginBottom:"0.8rem", outline:"none",
              }}
            />
            <div style={{ display:"flex", gap:"0.35rem", flexWrap:"wrap", marginBottom:"0.9rem" }}>
              {CATEGORIES.map(function(cat) { return (
                <button key={cat} onClick={function(){setFilterCat(cat);}} style={{
                  background: filterCat===cat ? gold : bg2,
                  border: filterCat===cat ? "1px solid " + gold : b5,
                  color: filterCat===cat ? navy : gold,
                  padding:"0.2rem 0.6rem", borderRadius:20,
                  fontSize:"0.64rem", cursor:"pointer", fontFamily:gfont, transition:"all 0.18s",
                }}>{cat}</button>
              ); })}
            </div>
            <div style={{ fontSize:"0.6rem", color:"#3a4f60", marginBottom:"0.65rem", letterSpacing:"0.08em" }}>
              {filtered.length} PRAYER{filtered.length!==1?"S":""} - SOURCE: SCHHW.NET/EN
            </div>

            <div style={{ display:"flex", flexDirection:"column", gap:"0.6rem" }}>
              {filtered.map(function(prayer) {
                var isOpen    = openId    === prayer.id;
                var isPlaying = playingId === prayer.id;
                var hasAudio  = !!prayer.audioUrl;
                return (
                  <div key={prayer.id} style={{
                    background: isOpen ? gr3 : bg1,
                    border: isOpen ? b8 : b10,
                    borderRadius:12, overflow:"hidden", transition:"all 0.25s",
                  }}>
                    <div onClick={function(){setOpenId(isOpen ? null : prayer.id);}}
                      style={{ padding:"0.85rem 1rem", cursor:"pointer", display:"flex", alignItems:"center", gap:"0.8rem" }}>
                      {hasAudio && (
                        <button onClick={function(e){handlePlay(prayer,e);}}
                          title="Play audio"
                          style={{
                            width:36, height:36, borderRadius:"50%", flexShrink:0,
                            border: "1.5px solid " + gold,
                            background: isPlaying ? gold : "transparent",
                            color: isPlaying ? navy : gold,
                            fontSize:"0.72rem", cursor:"pointer",
                            display:"flex", alignItems:"center", justifyContent:"center", transition:"all 0.2s",
                          }}>
                          {isPlaying ? "||" : ">"}
                        </button>
                      )}
                      <div style={{ flex:1, minWidth:0 }}>
                        <div style={{ fontSize:"0.86rem", color:lt, marginBottom:"0.1rem", lineHeight:1.3 }}>{prayer.title}</div>
                        <div style={{ fontSize:"0.62rem", color:"#667788", fontStyle:"italic" }}>{prayer.subtitle}</div>
                      </div>
                      <div style={{ textAlign:"right", flexShrink:0 }}>
                        <div style={{ fontSize:"0.56rem", color:gold, border:b6, padding:"0.08rem 0.28rem", borderRadius:3 }}>{prayer.category}</div>
                      </div>
                    </div>
                    {isPlaying && hasAudio && (
                      <div style={{ padding:"0 1rem 0.4rem" }}>
                        <div style={{ height:2, background:c6, borderRadius:2, overflow:"hidden" }}>
                          <div style={{ width:progress + "%", height:"100%", background:gr4, transition:"width 0.1s linear" }}/>
                        </div>
                      </div>
                    )}
                    {isOpen && (
                      <div style={{ padding:"0 1.3rem 1.2rem", borderTop:b1 }}>
                        <div style={{ fontSize:"0.82rem", lineHeight:1.9, color:"#c0ccd8", whiteSpace:"pre-line", fontStyle:"italic", paddingTop:"0.85rem" }}>{prayer.text}</div>
                        <a href={prayer.source} target="_blank" rel="noopener noreferrer"
                          style={{ fontSize:"0.56rem", color:"#3a4f60", marginTop:"0.85rem", display:"block", letterSpacing:"0.04em" }}>
                          Source: schhw.net
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop:"1.6rem", padding:"0.95rem 1.1rem", background:c1, borderRadius:12, border:b3 }}>
              <div style={{ fontSize:"0.65rem", color:gold, letterSpacing:"0.12em", marginBottom:"0.35rem" }}>ADDING AUDIO</div>
              <div style={{ fontSize:"0.7rem", color:"#667788", lineHeight:1.7 }}>
                Host your .mp3 or .m4a on any web host (Google Drive, Dropbox, SoundCloud, S3) and paste the
                {" "}<strong style={{ color:"#99aabb" }}>direct download URL</strong>{" "}
                into the audioUrl field for that prayer. The play button activates automatically.
              </div>
            </div>

            <div style={{ textAlign:"center", marginTop:"0.85rem", padding:"0.9rem", background:c1, borderRadius:12, border:b2 }}>
              <div style={{ fontSize:"0.65rem", color:gold, letterSpacing:"0.15em", marginBottom:"0.25rem" }}>STOP PRAYER</div>
              <div style={{ fontSize:"0.7rem", color:"#556677", fontStyle:"italic", lineHeight:1.6 }}>
                Pause wherever you are. Breathe. Turn to Mary.
                <br/>Let grace find you in this moment.
              </div>
            </div>
          </div>
        )}

        {/* SDO TAB */}
        {activeTab === "sdo" && (
          <div>

            {/* Notification prompt — shown after first item is added */}
            {notifState === "asking" && (
              <div style={{ marginBottom:"1rem", padding:"1rem 1.1rem", background:sdoNotifBg, border:sdoNotifBrd, borderRadius:12 }}>
                <div style={{ fontSize:"0.65rem", color:sdoPurple, letterSpacing:"0.12em", marginBottom:"0.35rem" }}>
                  DAILY REMINDERS
                </div>
                <p style={{ margin:"0 0 0.75rem", fontSize:"0.75rem", color:"#c0ccd8", lineHeight:1.6 }}>
                  Would you like a reminder at noon if you have not started, and at 8pm if anything is still uncomplete?
                </p>
                <div style={{ display:"flex", gap:"0.5rem" }}>
                  <button onClick={sdoRequestNotifications} style={{
                    background:sdoGrPurp, border:"none", borderRadius:7,
                    color:"#fff", padding:"0.35rem 0.9rem", fontSize:"0.72rem",
                    cursor:"pointer", fontFamily:gfont,
                  }}>Yes, remind me</button>
                  <button onClick={function(){ setNotifState("denied"); }} style={{
                    background:"transparent", border:sdoNotifBrd, borderRadius:7,
                    color:sdoFaded, padding:"0.35rem 0.9rem", fontSize:"0.72rem",
                    cursor:"pointer", fontFamily:gfont,
                  }}>No thanks</button>
                </div>
              </div>
            )}

            {notifState === "granted" && (
              <div style={{ marginBottom:"0.75rem", padding:"0.6rem 1rem", background:sdoNotifBg, border:sdoNotifBrd, borderRadius:10, fontSize:"0.65rem", color:sdoPurple }}>
                Reminders scheduled for noon and 8pm today.
              </div>
            )}
            {/* Date + progress header */}
            <div style={{ marginBottom:"1rem", padding:"1rem 1.1rem", background:c1, border:b3, borderRadius:12 }}>
              <div style={{ fontSize:"0.58rem", letterSpacing:"0.18em", color:"#a78bfa", textTransform:"uppercase", marginBottom:"0.3rem" }}>
                {new Date().toLocaleDateString("en-US", { weekday:"long", month:"long", day:"numeric" })}
              </div>
              <div style={{ fontSize:"1rem", fontWeight:"normal", color:lt, marginBottom: sdoItems.length > 0 ? "0.6rem" : "0" }}>
                Spiritual Daily Order
              </div>
              {sdoItems.length > 0 && (
                <div>
                  <div style={{ fontSize:"0.65rem", color:sdoGray, marginBottom:"0.4rem" }}>
                  {sdoDone} of {sdoItems.length} completed
                </div>
                  <div style={{ height:3, borderRadius:99, background:sdoTrack, overflow:"hidden" }}>
                    <div style={{
                      height:"100%",
                      width: Math.round(sdoDone / sdoItems.length * 100) + "%",
                      background:sdoGrBar,
                      borderRadius:99,
                      transition:"width 0.4s ease",
                    }}/>
                  </div>
                </div>
              )}
            </div>

            {/* Add input */}
            <div style={{ display:"flex", gap:"0.5rem", marginBottom:"0.9rem" }}>
              <input
                value={sdoInput}
                onChange={function(e){ setSdoInput(e.target.value); }}
                onKeyDown={function(e){ if(e.key==="Enter") sdoAdd(); }}
                placeholder="Add a practice..."
                style={{
                  flex:1, background:bg2, border:b5, borderRadius:8,
                  color:cream, padding:"0.5rem 0.9rem", fontSize:"0.8rem",
                  fontFamily:gfont, outline:"none",
                }}
              />
              <button onClick={sdoAdd} style={{
                background:sdoGrPurp,
                border:"none", borderRadius:8, width:38, height:38,
                color:"#fff", fontSize:"1.3rem", cursor:"pointer",
                display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
              }}>+</button>
            </div>

            {/* Items list */}
            <div style={{ background:bg1, border:b10, borderRadius:12, overflow:"hidden", minHeight:60 }}>
              {sdoItems.length === 0 && (
                <div style={{ textAlign:"center", color:"#445566", padding:"2rem 0", fontSize:"0.72rem", fontStyle:"italic" }}>
                  No practices yet — add one above
                </div>
              )}
              {sdoItems.map(function(item, idx) {
                var checked   = !!sdoChecks[item.id];
                var isEditing = sdoEditId === item.id;
                var notLast   = idx < sdoItems.length - 1;
                return (
                  <div key={item.id} style={{
                    display:"flex", alignItems:"center", gap:"0.75rem",
                    padding:"0.75rem 1rem",
                    borderBottom: notLast ? b1 : "none",
                    background: checked ? sdoChecked : "transparent",
                    transition:"background 0.15s",
                  }}>
                    {/* Checkbox */}
                    <div onClick={function(){ sdoToggle(item.id); }} style={{
                      width:22, height:22, borderRadius:6, flexShrink:0, cursor:"pointer",
                      border: checked ? "none" : sdoChkBord,
                      background: checked ? sdoGrPurp : "transparent",
                      display:"flex", alignItems:"center", justifyContent:"center",
                      transition:"all 0.2s",
                    }}>
                      {checked && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>

                    {/* Text or edit input */}
                    {isEditing ? (
                      <input
                        autoFocus
                        value={sdoEditTx}
                        onChange={function(e){ setSdoEditTx(e.target.value); }}
                        onKeyDown={function(e){ if(e.key==="Enter") sdoSaveEdit(); if(e.key==="Escape") setSdoEditId(null); }}
                        onBlur={sdoSaveEdit}
                        style={{
                          flex:1, background:bg2, border:sdoEditBrd,
                          borderRadius:6, padding:"0.25rem 0.5rem",
                          color:cream, fontSize:"0.82rem", fontFamily:gfont, outline:"none",
                        }}
                      />
                    ) : (
                      <span
                        onDoubleClick={function(){ sdoStartEdit(item); }}
                        style={{
                          flex:1, fontSize:"0.82rem",
                          color: checked ? sdoFaded : sdoBright,
                          textDecoration: checked ? "line-through" : "none",
                          transition:"all 0.2s", userSelect:"none",
                        }}>
                        {item.text}
                      </span>
                    )}

                    {/* Edit / delete buttons */}
                    {!isEditing && (
                      <div style={{ display:"flex", gap:"0.25rem", flexShrink:0 }}>
                        <button onClick={function(){ sdoStartEdit(item); }} style={{
                          background:"none", border:"none", color:sdoFaded,
                          cursor:"pointer", fontSize:"0.8rem", padding:"0.1rem 0.3rem", borderRadius:4,
                        }}>edit</button>
                        <button onClick={function(){ sdoDelete(item.id); }} style={{
                          background:"none", border:"none", color:sdoRed,
                          cursor:"pointer", fontSize:"0.8rem", padding:"0.1rem 0.3rem", borderRadius:4,
                        }}>del</button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {sdoItems.length > 0 && (
              <div style={{ marginTop:"0.6rem", fontSize:"0.6rem", color:"#3a4f60", textAlign:"center", fontStyle:"italic" }}>
                Checks reset daily - double-click any item to edit
              </div>
            )}
          </div>
        )}

      </div>

      {/* FOOTER */}
      <div style={{ position:"fixed", bottom:0, left:0, right:0, padding:"0.6rem", borderTop:b2, background:dk, backdropFilter:bdf, textAlign:"center" }}>
        <div style={{ fontSize:"0.56rem", color:"#3a4f60", letterSpacing:"0.15em" }}>IN TE CONFIDO</div>
      </div>
    </div>
  );
}
