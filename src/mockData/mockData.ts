

export function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {

        let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 || 0x8);
        return v.toString(16);
    });
}

let data: Object[] = [
    //1:
    {
        ID: uuid(),
        note: "",
        "ques": "In paragraph one, the writer suggests that companies could consider",
        "answer": [
            {
                ID: uuid(),
                ans: "abolishing pay schemes that are based on age.",

            },
            {
                ID: uuid(),
                ans: "equipping older workers with new skills.",

            },
            {
                ID: uuid(),
                ans: "increasing pay for older workers.",

            },
            {
                ID: uuid(),
                ans: "avoiding pay that is based on piece-rates.",

            },
        ],
        "score": 2,
        "type": 0,
        "finalAnswer": ["0"]
    },
    //2
    {
        "ID": uuid(),
        "note": "",
        "ques": "offers older workers increases in salary.",
        "answer":
            [
                {
                    ID: uuid(),
                    ans: "abolishing pay schemes that are based on age.",

                },
                {
                    ID: uuid(),
                    ans: "allows people to continue working for as long as they want.",

                },
                {
                    ID: uuid(),
                    ans: "allows the expertise of older workers to be put to use.",

                },
                {
                    ID: uuid(),
                    ans: "treats older and younger workers equally.",

                }],
        "score": 2,
        "type": 0,
        "finalAnswer": ["0"]
    },
    //3
    {
        "ID": uuid(),
        "note": "",
        "ques": "According to the writer, 'bridge' jobs",
        "answer": [
            {
                ID: uuid(),
                ans: "tend to attract people in middle-salary ranges.",

            },
            {
                ID: uuid(),
                ans: "appeal to distinct groups of older workers.",

            },
            {
                ID: uuid(),
                ans: "originated in the United States.",

            },
            {
                ID: uuid(),
                ans: "are better paid than some full-time jobs.",

            }],
        "score": 2,
        "type": 0,
        "finalAnswer": ["0"]
    },
    //4
    {
        "ID": uuid(),
        "note": "",
        "ques": "David Storey’s study found that",
        "answer":
            [
                {
                    ID: uuid(),
                    ans: "people demand more from their work as they get older.",

                },
                {
                    ID: uuid(),
                    ans: "few young people have their own businesses.",

                },
                {
                    ID: uuid(),
                    ans: "an increasing number of old people are self-employed.",

                },
                {
                    ID: uuid(),
                    ans: "older people are good at running their own businesses.",

                }],
        "score": 2,
        "type": 0,
        "finalAnswer": ["3"]
    },

    //5-6
    {
        "ID": uuid(),
        "note": ``,
        "ques": "The list below gives some of the advantages of employing older workers.\n" +
            "\n" +
            "       Which TWO advantages are mentioned by the writer of the text?",
        "answer":
            [
                {
                    ID: uuid(),
                    ans: "They are less likely to be involved in careless accidents.",

                },
                {
                    ID: uuid(),
                    ans: "They can predict areas that may cause trouble in the future.",

                },
                {
                    ID: uuid(),
                    ans: "They are able to train younger workers.",

                },
                {
                    ID: uuid(),
                    ans: "They can deal with unexpected problems.",

                },
                {
                    ID: uuid(),
                    ans: "They are more conscientious.",

                },
                {
                    ID: uuid(),
                    ans: "They are prepared to work for lower salaries.",

                },
                {
                    ID: uuid(),
                    ans: "They are more skilled in personal relationships.",

                },


            ],
        "score": 2,
        "type": 1,
        "finalAnswer": ["0","4"]
    },
    //7-8
    {
        "ID": uuid(),
        "note": ``,
        "ques": " The list below gives some of the disadvantages of employing younger workers.\n" +
            "\n" +
            "       Which TWO disadvantages are mentioned by the writer of the text?",
        "answer":
            [

                {
                    ID: uuid(),
                    ans: "They are too confident of their own skills.",

                },
                {
                    ID: uuid(),
                    ans: "They may injure themselves.",

                },
                {
                    ID: uuid(),
                    ans: "They do not stay with the same company for very long.",

                },
                {
                    ID: uuid(),
                    ans: "Their training has been too theoretical.",

                },
                {
                    ID: uuid(),
                    ans: "They are not as well educated as older workers.",

                },
                {
                    ID: uuid(),
                    ans: "They demand higher salaries.",

                },

            ],
        "score": 2,
        "type": 1,
        "finalAnswer": ["0","6"]
    },
    //9
    {
        "ID": uuid(),
        "note": `Questions 9 – 11
Choose TRUE if the statement agrees with the information given in the text, choose FALSE if the statement contradicts the information, or choose NOT GIVEN if there is no information on this.`,
        "ques": " Marie Curie’s husband was a joint winner of both Marie’s Nobel Prizes.",
        "answer":
            [

                {
                    ID: uuid(),
                    ans: "TRUE",

                },
                {
                    ID: uuid(),
                    ans: "FALSE",

                },
                {
                    ID: uuid(),
                    ans: "NOT GIVEN",

                },


            ],
        "score": 2,
        "type": 2,
        "finalAnswer": ["0"]
    },
    //10
    {
        "ID": uuid(),
        "note": `Questions 9 – 11
Choose TRUE if the statement agrees with the information given in the text, choose FALSE if the statement contradicts the information, or choose NOT GIVEN if there is no information on this.`,
        "ques": " Marie became interested in science when she was a child.",
        "answer":
            [

                {
                    ID: uuid(),
                    ans: "TRUE",

                },
                {
                    ID: uuid(),
                    ans: "FALSE",

                },
                {
                    ID: uuid(),
                    ans: "NOT GIVEN",

                },


            ],
        "score": 2,
        "type": 2,
        "finalAnswer": ["0"]
    },

//11
    {
        "ID": uuid(),
        "note": `Questions 9 – 11
Choose TRUE if the statement agrees with the information given in the text, choose FALSE if the statement contradicts the information, or choose NOT GIVEN if there is no information on this.`,
        "ques": " Marie was able to attend the Sorbonne because of her sister’s financial contribution.",
        "answer":
            [

                {
                    ID: uuid(),
                    ans: "TRUE",

                },
                {
                    ID: uuid(),
                    ans: "FALSE",

                },
                {
                    ID: uuid(),
                    ans: "NOT GIVEN",

                },


            ],
        "score": 2,
        "type": 2,
        "finalAnswer": ["0"]
    },


    //12-17
    {
        "ID": uuid(),
        "note": `Questions 9 – 11
Choose TRUE if the statement agrees with the information given in the text, choose FALSE if the statement contradicts the information, or choose NOT GIVEN if there is no information on this.`,
        "ques": " Marie was able to attend the Sorbonne because of her sister’s financial contribution.",
        "answer":
            [

                {
                    ID: uuid(),
                    ans: "When uranium was discovered to be radioactive, Marie Curie found that the element called __ had the same property.\n",

                },
                {
                    ID: uuid(),
                    ans: "Marie and Pierre Curie’s research into the radioactivity of the mineral known as __ led to the discovery of two new elements.",

                },
                {
                    ID: uuid(),
                    ans: "In 1911, Marie Curie received recognition for her work on the element __",

                },
                {
                    ID: uuid(),
                    ans: "Marie and Irène Curie developed X-radiography which was used as a medical technique for __",

                },
                {
                    ID: uuid(),
                    ans: "Marie Curie saw the importance of collecting radioactive material both for research and for cases of __ .",

                },
                {
                    ID: uuid(),
                    ans: "The radioactive material stocked in Paris contributed to the discoveries in the 1930s of the __ and of what was known as artificial radioactivity.",

                },
            ],
        "score": 12,
        "type": 3,
        "finalAnswer": ["0","6","7","0","6","7"]
    },

    //18
    {
        "ID": uuid(),
        "note": ` __ Some years ago, when several theoretical physicists, principally Dirk Helbing and Boris Kerner of Stuttgart, Germany, began publishing papers on traffic flow in publications normally read by traffic engineers, they were clearly working outside their usual sphere of investigation. They had noticed that if they simulated the movement of vehicles on a highway, using the equations that describe how the molecules of a gas move, some very strange results emerged. Of course, vehicles do not behave exactly like gas molecules: for example, drivers try to avoid collisions by slowing down when they get too near another vehicle, whereas gas molecules have no such concern. However, the physicists modified the equations to take the differences into account and the overall description of traffic as a flowing gas has proved to be a very good one; the moving-gas model of traffic reproduces many phenomena seen in real-world traffic.

The strangest thing that came out of these equations, however, was the implication that congestion can arise completely spontaneously; no external causes are necessary. Vehicles can be flowing freely along, at a density still well below what the road can handle, and then suddenly gel into a slow-moving ooze. Under the right conditions a brief and local fluctuation in the speed or the distance between vehicles is all it takes to trigger a system-wide breakdown that persists for hours. In fact, the physicists’ analysis suggested such spontaneous breakdowns in traffic flow probably occur quite frequently on highways.

Dramatic effects can result from small changes in traffic just as in nature
Though a decidedly unsettling discovery, this showed striking similarities to the phenomena popularized as ‘chaos theory’. This theory has arisen from the understanding that in any complex interacting system which is made of many parts, each part affects the others. Consequently, tiny variations in one part of a complex system can grow in huge but unpredictable ways. This type of dramatic change from one state to another is similar to what happens when a chemical substance changes from a vapor to a liquid. It often happens that water in a cloud remains as a gas even after its temperature and density have reached the point where it could condense into water droplets. However, if the vapor encounters a solid surface, even something as small as a speck of dust, condensation can take place and the transition from vapor to liquid finally occurs. Helbing and Kerner see traffic as a complex interacting system. They found that a small fluctuation in traffic density can act as the ‘speck of dust’ causing a sudden change from freely moving traffic to synchronized traffic, when vehicles in all lanes abruptly slow down and start moving at the same speed, making passing impossible.
__ The physicists have challenged proposals to set a maximum capacity for vehicles on highways. They argue that it may not be enough simply to limit the rate at which vehicles are allowed to enter a highway, rather, it may be necessary to time each vehicle’s entry onto a highway precisely to coincide with a temporary drop in the density of vehicles along the road. The aim of doing this would be to smooth out any possible fluctuations in the road conditions that can trigger a change in traffic behavior and result in congestion. They further suggest that preventing breakdowns in the flow of traffic could ultimately require implementing the radical idea that has been suggested from time to time: directly regulating the speed and spacing of individual cars along a highway with central computers and sensors that communicate with each car’s engine and brake controls.
__ However, research into traffic control is generally centered in civil engineering departments and here the theories of the physicists have been greeted with some skepticism. Civil engineers favor a practical approach to problems and believe traffic congestion is the result of poor road construction (two lanes becoming one lane or dangerous curves), which constricts the flow of traffic. Engineers questioned how well the physicists’ theoretical results relate to traffic in the real world. Indeed, some engineering researchers questioned whether elaborate chaos-theory interpretations are needed at all, since at least some of the traffic phenomena the physicists’ theories predicted seemed to be similar to observations that had been appearing in traffic engineering literature under other names for years; observations which had straightforward cause-and-effect explanations.
__ James Banks, a professor of civil and environmental engineering at San Diego State University in the US, suggested that a sudden slowdown in traffic may have less to do with chaos theory than with driver psychology. As traffic gets heavier and the passing lane gets more crowded, aggressive drivers move to other lanes to try to pass, which also tends to even out the speed between lanes. He also felt that another leveling force is that when a driver in a fast lane brakes a little to maintain a safe distance between vehicles, the shock wave travels back much more rapidly than it would in the other slower lanes, because each following driver has to react more quickly. Consequently, as a road becomes congested, the faster moving traffic is the first to slow down.
`,
        "ques": "",
        "answer":
            [
                {
                    ID: uuid(),
                    ans: "How a concept from one field of study was applied in another",

                },
                {
                    ID: uuid(),
                    ans: "A lack of investment in driver training",

                },
                {
                    ID: uuid(),
                    ans: "Areas of doubt and disagreement between experts",

                },
                {
                    ID: uuid(),
                    ans: "How different countries have dealt with traffic congestion",

                },
                {
                    ID: uuid(),
                    ans: "The impact of driver behavior on traffic speed",

                },
                {
                    ID: uuid(),
                    ans: "A proposal to take control away from the driver",

                },
                {
                    ID: uuid(),
                    ans: "How a maths experiment actually reduced traffic congestion",

                },

            ],
        "score": 2,
        "type": 4,
        "finalAnswer": ["0","3","4","7"]
    },
    //22
    {
        "ID": uuid(),
        "note": `Harkness’s research method was different to that of other writers because __
        
        Harkness’s reconstruction of the 16th-century London scientific groups was new because __
        
        Harkness shows that the 16th-century London scientists were innovative because __`,
        "ques": "In paragraph one, the writer suggests that companies could consider",
        "answer":
            [
                {
                    ID: uuid(),
                    ans: "she has the greatest knowledge of Elizabethan London.",

                },
                {
                    ID: uuid(),
                    ans: "she started by seeking to understand how basic terms were used in the past.",

                },
                {
                    ID: uuid(),
                    ans: "they worked as individuals rather than as a group.",

                },
                {
                    ID: uuid(),
                    ans: "she examined how their methods evolved and changed.",

                },
                {
                    ID: uuid(),
                    ans: "Clement Draper was the best scientist of his time.",

                },
                {
                    ID: uuid(),
                    ans: "they used old ways of analysing written information for new purposes.",

                },

            ],
        "score": 2,
        "type": 5,
        "finalAnswer": ["0","4","6"]
    },
    {
        "ID": uuid(),
        "note": `The wheel is one invention that has had a major impact on __ aspects of life, but no impact has been as __ as that of language. Language is very __  , yet composed of just a small number of sounds.
        
        Language appears to be __ to use. However, its sophistication is often overlooked.`,
        "ques": "In paragraph one, the writer suggests that companies could consider",
        "answer":
            [
                {
                    ID: uuid(),
                    ans: "difficult",

                },
                {
                    ID: uuid(),
                    ans: "complex",

                },
                {
                    ID: uuid(),
                    ans: "original",

                },
                {
                    ID: uuid(),
                    ans: "admired",

                },
                {
                    ID: uuid(),
                    ans: "material",

                },
                {
                    ID: uuid(),
                    ans: "easy",

                },
                {
                    ID: uuid(),
                    ans: "fundamental",

                },
            ],
        "score": 2,
        "type": 6,
        "finalAnswer": ["0","ii","99","123"]
    },
    {
        "ID": uuid(),
        "note": `Consumers often complain that they experience a feeling of  __ when trying to put together do-it-yourself products which have not been tested by companies on a __ . In situations where not keeping to the correct procedures could affect safety issues, it is especially important that __ information is not left out and no assumptions are made about a stage being self-evident or the consumer having a certain amount of __
         
         Lawyers, however, have raised objections to the use of plain English. They feel that it would result in ambiguity in documents and cause people to lose faith in __ , as it would mean departing from language that has been used in the courts for a very long time.`,
        "ques": "In paragraph one, the writer suggests that companies could consider",
        "answer":
            [
                {
                    ID: uuid(),
                    ans: `
                    Consumers often complain that they experience a feeling of  __ when trying to put together do-it-yourself products which have not been tested by companies on a __ . In situations where not keeping to the correct procedures could affect safety issues, it is especially important that __ information is not left out and no assumptions are made about a stage being self-evident or the consumer having a certain amount of __.`,

                },
                {
                    ID: uuid(),
                    ans: `Lawyers, however, have raised objections to the use of plain English. They feel that it would result in ambiguity in documents and cause people to lose faith in __ , as it would mean departing from language that has been used in the courts for a very long time.`,

                }


            ],
        "score": 10,
        "type": 7,
        "finalAnswer": ["0","u","23","09","12"]
    },
    {
        "ID": uuid(),
        "note": `
        Huxley formulated his theory while studying a dinosaur belonging to a group called __ 
        
        Heilmann rejected Huxley’s theory because of the apparent absence of __ in dinosaurs.
        
        Feduccia and Martin believe that the ancestor of today’s birds was a kind of early __ 
        
        In cladistics, the __ between organisms’ characteristics are of major importance.
        
        The dangerous __ on a primitive bird from Madagascar adds weight to the ‘dino-bird’ argument.`,
        "ques": "In paragraph one, the writer suggests that companies could consider",
        "answer":
            [
                {
                    ID: uuid(),
                    ans: `Huxley formulated his theory while studying a dinosaur belonging to a group called __.`,

                },
                {
                    ID: uuid(),
                    ans: `Heilmann rejected Huxley’s theory because of the apparent absence of __ in dinosaurs.`,

                },
                {
                    ID: uuid(),
                    ans: `Feduccia and Martin believe that the ancestor of today’s birds was a kind of early __.`,

                },
                {
                    ID: uuid(),
                    ans: `In cladistics, the __ between organisms’ characteristics are of major importance.`,

                },
                {
                    ID: uuid(),
                    ans: `The dangerous __ on a primitive bird from Madagascar adds weight to the ‘dino-bird’ argument.`,

                },
            ],
        "score": 2,
        "type": 8,
        "finalAnswer": ["0","u","23","09","12"]
    },
    {
        "ID": uuid(),
        "note": ``,
        "ques": "In paragraph one, the writer suggests that companies could consider",
        "answer":
            [
                {
                    ID: uuid(),
                    ans: `less__is processed.`

                },
                {
                    ID: uuid(),
                    ans: `Cells less damaged by disease because fewer__are emitted.`

                },
                {
                    ID: uuid(),
                    ans: `cells focus on __ because food is in short supply.`

                },


            ],
        "score": 2,
        "type": 9,
        "finalAnswer": ["0","u","23"]
    },



]

export default JSON.stringify(data);