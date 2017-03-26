'use strict';
var Alexa = require('alexa-sdk');
var APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

var languageStrings = {
    "en": {
        "translation": {
            "FACTS": [
                "In Utah, it is illegal to hire trombone players to play on the street to advertise an auction.",
                "In Utah, it is illegal to fish while on horseback and to hunt whales.",
                "In Salt Lake City it is illegal to walk down the street carrying a paper bag containing a violin.",
                "Utah has the highest literacy rate in the United States.",
                "Utah Lake is 24 miles long and 12 miles across. Almost 41% of the lake evaporates each year. There used to be a showboat on the lake that included on-deck dancing and a full orchestra.",
                "Arizona, Colorado, New Mexico, and Utah all meet at four corners. This is the only place in the United States where four states come together.",
                "The Great Salt Lake is saltier than the ocean",
                "Utah’s Great Salt Lake is about four times saltier than any of the world’s oceans. If a person boiled 1 quart of water from the saltiest part of the lake, a half cup of salt would remain. It is so salty because as the ancient Lake Bonneville dried up, salt and other minerals were left behind. Because the shrinking lake had no stream out to sea, the salt deposits became concentrated in the lake.",
                "According to Webster’s, “Utahans” is the grammatically correct way to refer to residents of Utah; however, most people from Utah stubbornly refer to themselves as “Utahns.”",
                "The name “Utah” is derived from the name of the Ute Native American tribe. The name means “people of the mountains.”",
                "Utah is the second-driest state in the United States after Nevada. On average, Utah has about 300 sunny days a year.",
                "Because it is centrally located in the Intermountain West, Utah is often called the “Crossroads of the West.” Its geography has three major land areas: the Rocky Mountains, the Basin and Ridge Region, and the Colorado Plateau.",
                "In 1824, Jim Bridger was the first Caucasian person to see the Great Salt Lake. He initially thought he had found the Pacific Ocean because it was so salty, but soon realized it was a giant salt lake. In the 1830s, thousands of people travelling from the East made stops in the Great Salt Lake region, which was then known as Lake Youta.",
                "Fillmore, Utah, is named after President Millard Fillmore and was initially designated as the capital. Salt Lake City replaced it as the territorial capital in 1856. Additionally, Salt Lake City was referred to as Great Salt Lake City until 1868.",
                "In 2012, Utah had the fourth highest bankruptcy filing in the United States, with 5.99 petitions for every 1,000 people. The average nationwide per capita filing rate was 3.97 petitions for every 1,000 people.",
                "During the Utah War (1857–1858), over 120 unarmed settlers, including women and children, were murdered by a group of Mormon militiamen. The militia initially claimed Native Americans killed the settlers. The motives behind the massacre remain unclear, though historians point to war hysteria and a fear of outsiders. Scholars still debate whether the Mormon leader, Brigham Young, ordered the massacre or if the responsibility lies with local leaders in southern Utah.",
                "Utah is called the “Beehive State” because most of Utah’s early white settlers belonged to the Church of Jesus Christ of Latter-day Saints, who follow the Book of Mormon. They were hard workers and envisioned themselves as a “hive of industry.” They wanted to call their new state “Deseret,” which is the word for “honey bee” in the Book of Mormon.",
                "Utah has the highest percentage of plastic surgeons per capita than any other state",
                "Salt Lake City, UT, has more plastic surgeons per capita than any other city in the United States.",
                "The state of Utah could fit inside California two times with a little left over. Only half of Utah could fit in Virginia.",
                "Utah is home to the largest open-pit mine in the world, Brigham Canyon.",
                "Utah has an average of only 32 people per square mile and is one of the most thinly populated states in the nation. Most Utahans live in the towns and cities along the Wasatch Front, which is the western side of the Wasatch Mountains (which is a range of the Rocky Mountains). Utah is the 13th largest, the 33rd most populous, and the 10th least densely populated state in the U.S.",
                "Approximately 82% of Utahans are of European descent. Hispanics or Latinos are the next largest ethic group in the state, making up almost 12% of the population. Utah has smaller populations of Asians, African Americans, and Native Americans.",
                "Utah is the only state to have a cooking pot among its state symbols. The Dutch oven was approved as a state symbol by the legislature in 1997.",
                "Hill Air Force Base near Ogden, Utah, is the largest employer in the state of Utah.",
                "Famous Utahans include David Archuleta, Butch Cassidy, Shannon Hale, Karl Malone, Donny and Marie Osmond, Robert Redford, Julianne and Derek Houghs, Roseanne Barr, Loretta Young, James Woods, Chrissy Teigen, Orson Scott Card, Terry Tempest Williams, and Steve Young.",
                "In Utah there is a town called “Levan.” Levan is “navel” backwards—and Levan is in the center, or is the “navel,” of Utah.",
                "More Utahans are married than the citizens in any other U.S. state",
                "A higher percentage of Utahans are married than in any other state in the United States. According to the 2012 American Community Survey, 57% of Utah’s women (15 years and older) are married, down from 69% in 1950.",
                "Utah couples marry at a younger age than in any other state in the country. The median age for a first marriage in Utah is 26.2 for the groom and 24.1 for the bride. The average for the rest of the United States is 29.1 for the groom and 27.1 for the bride.",
                "Utah’s divorce rate is slightly higher than the U.S. average and has been that way for decades. However, while Utahans are more likely than their national counterparts to divorce, they are also more likely to marry or remarry.",
                "About 13% of Utah’s children live in households headed by a woman with no husband present, which is lower than the national average of 25%.",
                "With 31% of the population under the age of 18, Utah has the youngest population in the United States. It also has the highest birth rate in the nation.",
                "Utah is home to the United States' first department store, Zions Co-operative Mercantile Institution. Today it is known as ZCMI.",
                "Kanab, Utah, is also known as “Little Hollywood” because over 100 movies (mostly Westerns) and many T.V. series have been filmed there since 1924. Famous movies include Stage Coach, The Lone Ranger, Gunsmoke, Planet of the Apes, The Outlaw Josey Wales, and Sergeants 3.",
                "Lagoon—located in Farmington, Utah—is the oldest operating amusement park in the American West, and its original roller coaster, named “Old Woodie,” is the 3rd oldest in the nation.",
                "Utah has the highest rate of online porn subscriptions in the United States.",
                "Approximately 62% of Utahans are Mormons, or members of the Church of Jesus Christ of Latter-day Saints. Utah is the most homogeneous state in the United States in terms of religion.",
                "Utah claims to have the \"Greatest Snow on Earth\"",
                "Because of the state of Utah’s high elevation and desert-like climate, its snow is dry and powdery. Hence, Utah claims to have the “Greatest Snow on Earth.”",
                "Utah has one of the highest rates of prescription drug abuse in the United States. Over the past decade, it has increase by 800%.",
                "Utah restaurants and bars have a unique partition that separates restaurant bartenders who are preparing drinks from the customers who order them. Their aim is to prevent excessive drinking by keeping alcohol out of sight. These partitions are called “Zion Curtains” by locals.",
                "Utah is home to the Missionary Training Center in Provo, Utah. This 35-acre center for LDS (Mormon) missionaries can house 3,800 missionaries and it serves 10,000 meals a day. It is the nation’s second largest on-site language school, after the U.S. Defense Department’s Language Institute in Monterrey, California.",
                "Polygamy was practiced in Utah until it was banned in 1890 as a condition of being granted statehood. Today there are roughly 40,000 polygamous marriages in the state of Utah, mostly among breakaway Mormon fundamentalist groups.",
                "On May 10, 1869, the First Transcontinental Railroad was completed at Promontory Summit, Utah. The event was billed as the “Wedding of the Rails.”",
                "While presidential hopeful Mitt Romney was born in Detroit, Michigan, he calls Utah home. His new 5,900-square-foot home in Holliday will include high ceilings, a hot tub, a secret door/room, an exercise room, and more.",
                "In 2014, 1,039 people dressed as angels, wise men, and other religious figures broke the Guinness World Record for the largest live nativity scene. Also in attendance in the Provo, Utah, park event were a camel, a donkey, and some sheep.",
                "The FBI holds various Utah “secrets” in its vault, including UFO sightings in Utah, snooping into whether the Utah NAACP had been infiltrated by communists, a death threat in Utah against Lady Bird Johnson, information on serial killer Ted Bundy, and former FBI Director J. Edgar Hoover’s dislike of Cleon Skousen (who has become an important figure in today’s Tea Party movement).",
                "Walter Frederick Morrison, the man credited with inventing the Frisbee, was born in Richfield, Utah. He said he got the idea for the “Pluto Platter” after throwing cake tins on the beach.",
                "The rubber chicken was invented in Utah",
                "Salt Lake City, UT, is home to the nation’s leading manufacturer of rubber chickens.",
                "One of the most unique places in Utah is the Bonneville Salt Flats, named after the ancient sea that covered the area. Stretching over 30,000 acres, the white salt is millions of years old. Thousands of tourists, filmmakers, and land speed racers make it famous throughout the world.",
                "Two dates appear on Utah’s state seal: 1847, the date Mormon settlers arrived in Utah, and 1896, the year Utah became the 45th state. Also on the seal are sego lilies, which stand for peace and are the state flower.",
                "Utah is home to 25 colleges and universities. Two universities, Brigham Young University and the University of Utah are traditionally rivals in several athletic fields. Their annual college game is nicknamed the “Holy War,” mainly because the LDS church owns BYU, while the U is a secular university.",
                "A 2012 Gallup poll found that Utah, overall, was the best state to live in. West Virginia, Mississippi, and Kentucky were in the bottom three.",
                "Over 2/3 of Utah land is owned by the United States' federal government.",
                "Approximately 75 million years ago, Utah was part of a landmass called Laramidia. This land mass was hot, swampy, and full of dinosaurs, which makes Utah one of the best places in the U.S. to find dinosaur fossils. In fact, the world’s largest raptor lived in Utah. Known as the “Utahraptor,” it measured over 23 feet long, making it larger than any other known raptor.",
                "Utah has the highest consumption of Jell-O in the United States. In fact, Jell-O is Utah’s state snack."
            ],
            "SKILL_NAME" : "Utah Facts",
            "GET_FACT_MESSAGE" : "Here's your fact: ",
            "HELP_MESSAGE" : "You can say tell me a Utah fact, or, you can say exit... What can I help you with?",
            "HELP_REPROMPT" : "What can I help you with?",
            "STOP_MESSAGE" : "Goodbye!"
        }
    }//,
    // "en-US": {
    //     "translation": {
    //         "FACTS": [
    //             "A year on Mercury is just 88 days long.",
    //             "Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.",
    //             "Venus rotates counter-clockwise, possibly because of a collision in the past with an asteroid.",
    //             "On Mars, the Sun appears about half the size as it does on Earth.",
    //             "Earth is the only planet not named after a god.",
    //             "Jupiter has the shortest day of all the planets.",
    //             "The Milky Way galaxy will collide with the Andromeda Galaxy in about 5 billion years.",
    //             "The Sun contains 99.86% of the mass in the Solar System.",
    //             "The Sun is an almost perfect sphere.",
    //             "A total solar eclipse can happen once every 1 to 2 years. This makes them a rare event.",
    //             "Saturn radiates two and a half times more energy into space than it receives from the sun.",
    //             "The temperature inside the Sun can reach 15 million degrees Celsius.",
    //             "The Moon is moving approximately 3.8 cm away from our planet every year."
    //         ],
    //         "SKILL_NAME" : "American Space Facts"
    //     }
    // },
    // "en-GB": {
    //     "translation": {
    //         "FACTS": [
    //             "A year on Mercury is just 88 days long.",
    //             "Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.",
    //             "Venus rotates anti-clockwise, possibly because of a collision in the past with an asteroid.",
    //             "On Mars, the Sun appears about half the size as it does on Earth.",
    //             "Earth is the only planet not named after a god.",
    //             "Jupiter has the shortest day of all the planets.",
    //             "The Milky Way galaxy will collide with the Andromeda Galaxy in about 5 billion years.",
    //             "The Sun contains 99.86% of the mass in the Solar System.",
    //             "The Sun is an almost perfect sphere.",
    //             "A total solar eclipse can happen once every 1 to 2 years. This makes them a rare event.",
    //             "Saturn radiates two and a half times more energy into space than it receives from the sun.",
    //             "The temperature inside the Sun can reach 15 million degrees Celsius.",
    //             "The Moon is moving approximately 3.8 cm away from our planet every year."
    //         ],
    //         "SKILL_NAME" : "British Space Facts"
    //     }
    // },
    // "de": {
    //     "translation": {
    //         "FACTS": [
    //             "Ein Jahr dauert auf dem Merkur nur 88 Tage.",
    //             "Die Venus ist zwar weiter von der Sonne entfernt, hat aber höhere Temperaturen als Merkur.",
    //             "Venus dreht sich entgegen dem Uhrzeigersinn, möglicherweise aufgrund eines früheren Zusammenstoßes mit einem Asteroiden.",
    //             "Auf dem Mars erscheint die Sonne nur halb so groß wie auf der Erde.",
    //             "Die Erde ist der einzige Planet, der nicht nach einem Gott benannt ist.",
    //             "Jupiter hat den kürzesten Tag aller Planeten.",
    //             "Die Milchstraßengalaxis wird in etwa 5 Milliarden Jahren mit der Andromeda-Galaxis zusammenstoßen.",
    //             "Die Sonne macht rund 99,86 % der Masse im Sonnensystem aus.",
    //             "Die Sonne ist eine fast perfekte Kugel.",
    //             "Eine Sonnenfinsternis kann alle ein bis zwei Jahre eintreten. Sie ist daher ein seltenes Ereignis.",
    //             "Der Saturn strahlt zweieinhalb mal mehr Energie in den Weltraum aus als er von der Sonne erhält.",
    //             "Die Temperatur in der Sonne kann 15 Millionen Grad Celsius erreichen.",
    //             "Der Mond entfernt sich von unserem Planeten etwa 3,8 cm pro Jahr."
    //         ],
    //         "SKILL_NAME" : "Weltraumwissen auf Deutsch",
    //         "GET_FACT_MESSAGE" : "Hier sind deine Fakten: ",
    //         "HELP_MESSAGE" : "Du kannst sagen, „Nenne mir einen Fakt über den Weltraum“, oder du kannst „Beenden“ sagen... Wie kann ich dir helfen?",
    //         "HELP_REPROMPT" : "Wie kann ich dir helfen?",
    //         "STOP_MESSAGE" : "Auf Wiedersehen!"
    //     }
    // }
};

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        var factArr = this.t('FACTS');
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];

        // Create speech output
        var speechOutput = this.t("GET_FACT_MESSAGE") + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t("SKILL_NAME"), randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = this.t("HELP_MESSAGE");
        var reprompt = this.t("HELP_MESSAGE");
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    }
};