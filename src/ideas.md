title=Ideas
description=Why, sometimes I've believed as many as six impossible things before breakfast.
date=2023-03-24
publish=true
@@@

# Ideas

I come up with ideas all the time. Way more than I could ever pursue. Rather than lock them in a shoebox to be forgotten, I think I'll put them out on the internet. All concepts are fair game. If you find something you like, then try to make it a reality!

If you want to chat about any ideas, drop me a line <a href='https://twitter.com/TylerMaran' target='_blank'>@tylermaran</a>

## Lenny 🤖

### <i>An AI friend you can chat with</i>

-   Not a Therapist, Not an assistant, Not even a real human
-   Work in progress: https://github.com/tylermaran/hacks/tree/master/lenny2

## Sojourn 🎧

### <i>Video game style background music</i>

-   Had this idea when I was walking around NY with my friend <a href='https://www.youtube.com/pwnisher' target='_blank'>Clint<a> and listening to some sweet ambient tracks. The track changed right as we walked out of the subway station and onto the street. It felt exactly like some Zelda style background music swapping as soon as you leave a dungeon.
-   App
    -   Has a map view, and different segments blocked off based on what music is there
    -   You can check off different zones by traveling to them
    -   Stretch: local artists can upload music to those zones (if they are physically present)
-   Buildout:
    -   Probably a Flutter app (cross platform)
    -   Get lat/long, check against geofence on backend
    -   Associate certain tracks with a geofence
    -   Basic audio player on front-end

## Mr. Roboto 🍲

### A robot that makes raman for you

-   I'm imagining a roadside raman stand. 6 seats. Humanoid robot (at least the upper half) serving up bowls of Raman 24 hours a day.
-   Raman should be easier than most of the food robot attempts out there, it's 90% water after all (cheap raman I mean, not trying to insult the incredible craft of Raman).
-   Probably not a great business idea. CafeX (and all it's competitors) failed after all. The world is just not ready for robotic food that isn't vending maching shaped. But it would be fun to build. And I can imagine showing up at 2 am and chatting with Mr. Roboto while serves me some raman.

## AuthHawk 🔒

### <i>Inserting env vars at runtime</i>

-   Most companies do a terrible job at sharing and managing `.env` variables. The idea is an `npm` package that pings a service with the server's private key, grabs a list of secret keys, and inserts them into the Node `process.env`
-   This does a couple things
    1.  No more slacking your env variablies back and forth. You just configure your keypair once, and then all the secrets live on a central server.
    2.  No more having out of date secrets, it gets pulled every few seconds
    3.  Easy to roll keys without impacting your dev team. It will auto pull the new keys when it polls for new keys.
    4.  You don't have to manage a separate set of keys on Heroku, or AWS, or whatever. It'll still pull from the same source, just with a different Public/Private key pair for production vs. dev secrets.

## iZac 🍸

### <i>Robotic bartender</i>

-   <a href="https://tylermaran.github.io/izac/" target='_blank'>I actually built this one!</a> And it was glorious. But he eventually fell into disrepair and was uncermoniously turned into spare parts. Always an idea I meant to come back to. Learned a lot from the previous iteration, and have some good ideas for where to go with a future model.
-   Business potential:
    -   Self serve is cool and all, but raises a lot of potential problems (over consumption, underage, etc.). The real value is back of the bar. Say you're at a busy club and a sorority comes in and orders 15 vodka cranberrys - just hit Vodka-Cran x 15 and watch them all pop out.
    -   Music festivals / cruises - anything where people are carrying around that RFID wristband and have been ID'd ahead of time. Solves two of the most annoying problems (id & payments)

## Pigeon ✉️

### <i>Email template tool with built in SQL queries</i>

-   <a href="https://pigeon-dev.netlify.app/" target='_blank'>MVP up and running!</a>
-   Idea came up when I had to send a lot of one off emails to users at Rysolv. The flow always went something like:
    1. `SELECT first_name, email FROM users WHERE something = TRUE`
    2. Copy paste the csv into mailchimp
    3. Template and send the email from mailchimp
-   So instead I built an email templating tool that had a built in SQL terminal.
