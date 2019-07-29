class LoveCalculator {
    constructor() {
        this.firstNumerology = {};
        this.secondNumerology = {};
    }
    _getFirstName() {
        const firstName = document.getElementById('first').value;
        const firstDate = new Date(document.getElementById('first-date').value);

        const regExp = /[a-zA-Z]{3,12}/;

        if (regExp.test(firstName)) {
            this.firstName = firstName;
            this.firstDate = firstDate;
        } else {
            alert("Enter valid name and date of birth");
            this._onReset();
        }
    }
    _getSecondName() {
        const secondName = document.getElementById('second').value;
        const secondDate = new Date(document.getElementById('second-date').value);

        const regExp = /[a-zA-Z]{3,12}/;

        if (regExp.test(secondName)) {
            this.secondDate = secondDate;
            this.secondName = secondName;
            this._calculateResult();
            this.compatibility = this._computeCompatibility(this.firstName, this.secondName);
            this.firstSign = this._calculateHoroscope(this.firstDate.getUTCDate(), this.firstDate.getUTCMonth());
            this.secondSign = this._calculateHoroscope(this.secondDate.getUTCDate(), this.secondDate.getUTCMonth());
            this._resultantNumerology();


        } else {
            alert("Enter valid name and date of birth");
            this._onReset();
        }
    }

    _computeCompatibility(first, second) {

        if (first === 'Aries') {
            if (second === 'Aquarius' || second === 'Sagittarius' || second === 'Leo' || second === 'Gemini') {
                return 'Very Compatible';
            } else {
                return 'Moderately Compatible';
            }
        } else if (first === 'Taurus') {
            if (second === 'Virgo' || second === 'Pisces') {
                return 'Very Compatible';
            } else {
                return 'Moderately Compatible';
            }
        } else if (first === 'Gemini') {
            if (second === 'Aquarius' || second === 'Libra') {
                return 'Very Compatible';
            } else {
                return 'Moderately Compatible';
            }
        } else if (first === 'Cancer') {
            if (second === 'Scorpio' || second === 'Pisces') {
                return 'Very Compatible';
            } else {
                return 'Moderately Compatible';
            }
        } else if (first === 'Leo') {
            if (second === 'Libra' || second === 'Sagittarius' || second === 'Aries' || second === 'Gemini') {
                return 'Very Compatible';
            } else {
                return 'Moderately Compatible';
            }
        } else if (first === 'Virgo') {
            if (second === 'Taurus' || second === 'Capricorn') {
                return 'Very Compatible';
            } else {
                return 'Moderately Compatible';
            }
        } else if (first === 'Libra') {
            if (second === 'Leo' || second === 'Sagittarius') {
                return 'Very Compatible';
            } else {
                return 'Moderately Compatible';
            }
        } else if (first === 'Scorpio') {
            if (second === 'Scorpio' || second === 'Pisces') {
                return 'Very Compatible';
            } else {
                return 'Moderately Compatible';
            }
        } else if (first === 'Sagittarius') {
            if (second === 'Leo' || second === 'Aries' || second === 'Libra' || second === 'Aquarius') {
                return 'Very Compatible';
            } else {
                return 'Moderately Compatible';
            }
        } else if (first === 'Capricorn') {
            if (second === 'Pisces' || second === 'Scorpio' || second === 'Virgo' || second === 'Taurus') {
                return 'Very Compatible';
            } else {
                return 'Moderately Compatible';
            }
        } else if (first === 'Aquarius') {
            if (second === 'Gemini' || second === 'Libra') {
                return 'Very Compatible';
            } else {
                return 'Moderately Compatible';
            }
        } else if (first === 'Pisces') {
            if (second === 'Scorpio' || second === 'Cancer') {
                return 'Very Compatible';
            } else {
                return 'Moderately Compatible';
            }
        } else {
            return 'Moderately Compatible';
        }
    }

    _calculateHoroscope(date, month) {
        if ((date >= 21 && month == 2) || (date <= 19 && month == 3)) {
            return 'Aries';
        } else if ((date >= 20 && month == 3) || (date <= 20 && month == 4)) {
            return 'Taurus';
        } else if ((date >= 21 && month == 4) || (date <= 20 && month == 5)) {
            return 'Gemini';
        } else if ((date >= 21 && month == 5) || (date <= 22 && month == 6)) {
            return 'Cancer';
        } else if ((date >= 23 && month == 6) || (date <= 22 && month == 7)) {
            return 'Leo';
        } else if ((date >= 23 && month == 7) || (date <= 22 && month == 8)) {
            return 'Virgo';
        } else if ((date >= 23 && month == 8) || (date <= 22 && month == 9)) {
            return 'Libra';
        } else if ((date >= 23 && month == 9) || (date <= 21 && month == 10)) {
            return 'Scorpio';
        } else if ((date >= 22 && month == 10) || (date <= 21 && month == 11)) {
            return 'Sagittarius';
        } else if ((date >= 22 && month == 11) || (date <= 19 && month == 0)) {
            return 'Capricorn';
        } else if ((date >= 20 && month == 0) || (date <= 18 && month == 1)) {
            return 'Aquarius';
        } else {
            return 'Pisces';
        }
    }

    _resultantNumerology() {
        // how to calculate a person's numerology
        function calculateNumerology(name, dob) {
            const destiny = {
                1: " The first sign of the zodiac, is about action and initiation, in numerology, 1 is linked to forward motion. 1 symbolizes a pioneering spirit, independent nature, and innate leadership capabilities. On a bad day, 1 can be be a bit bossy or boastful, hiding any insecurities behind an over-developed self-importance. 1 must remember that although it is first, it can very quickly become the loneliest number. Even the most autonomous 1s need the support of their friends, family, and lovers.",

                2: " 2 is linked to sensitivity, balance, and harmony. Within numerology, the 2 vibration assumes the role of the mediator, creating harmony by bringing together dissonant forces through compassion, empathy, and kindness. 2 is linked to psychic abilities and intuition, and if this number appears as a Life Path or Destiny Number, the individual will be astute to subtle energy shifts and emotional nuances. Because 2 is so sensitive, it is very conflict averse, and can end up feeling under-appreciated or unacknowledged. 2 must avoid seeking external validation and, instead, realize that perfect equilibrium needed already exists within.",

                3: " Communication is paramount for 3. Symbolically, 3 represents the output of two joined forces: It is the essence of creation. 3 is highly gifted at expression, seamlessly sharing innovative and pioneering concepts through art, writing, and oration. Your work inspires, motivates, and uplifts others, and 3 finds great joy making others smile. However, 3 is also known to be quite moody, and if 3 feels misunderstood, may withdraw entirely. The escapist tendencies of 3 are easily mitigated by practicing peaceful mindfulness: With such an active imagination, it’s important for 3 to find moments of quiet to reset, restore, and recharge.",

                4: " In numerology, 4 has an earthy-energy and is centered around fortifying its roots. 4 adamantly believes in the physical world, and knows that investing in a solid infrastructure is necessary for building a lasting legacy. Practical, hardworking, and responsible, the 4 vibration is focused on creating logical systems that can support scalable growth. There is a solidity to 4, however, that can quickly devolve into rigidity; 4 must remember that rules are meant to enhance, not inhibit. It’s easy for 4 to become stubborn, so 4 benefits from learning to loosen up and think outside-the-box. 4 will feel liberated and inspired by finding the bravery to take a few bold risks.",

                5: " Free-thinking, adventurous, and progressive, 5 is defined by freedom. 5 needs to experience the world by engaging its five senses: For 5, life lessons are acquired through spontaneous acts of bravery. Akin to Sagittarius energy within astrology, 5 is known for its playful, impuslive, and vivacious spirit. But on the other side of its signature joie de vivre, 5 can become restless and impatient. Since 5 is always seeking discovery, it has a difficult time accepting life’s day-to-day responsibilities — including professional and interpersonal commitments. 5 must remember that when it narrows its gaze, it will discover that the most rewarding exploration exists in its own backyard.",

                6: " 6 is recognized for its nurturing, supportive, and empathic nature. A true healer, 6 has the ability to problem solve in both the emotional and physical realms, helping others through its straightforward, yet gentle, approach. 6 has a strong sense of responsibility, and cares deeply for its friends, family, and lovers. This number also can easily communicate with children and animals, displaying a soft tenderness and caretaker spirit. But not everything needs to be parented, and sometimes 6’s protective energy can become domineering and controlling. To avoid carrying the world on its shoulders, 6 must learn to build trust and understanding for others: Simply put, everyone must follow their own unique path.",

                7: " The detectives of numerology, 7 is known for its investigative abilities and analytical skills. Astrologically, the number 7 can be thought of as a blend of Virgo and Scorpio energy: 7 is extremely detail-oriented, but is driven by inner-wisdom as oppossed to tangible realities. 7 has a keen eye, and its astute observations fuel a quick-witted, inventive spirit. Because it can quickly find the flaws in almost any system, 7 is a bit of a perfectionist. 7 will often assume fault, so it’s important for this number to counterbalance its inherent skepticism with an open mind. Not everything will be foolproof — but that’s what makes life fun.",

                8: " 8 is all about abundance. Within numerology, this number is linked to material wealth and financial success. Ambitious and goal-oriented, 8 can effortlessly assume leadership positions through its natural magnetism. 8 applies big-picture thinking to broaden its scope, racing up the top of any ladder to reach extraordinary heights. But with great power comes great responsibility: 8 breeds workaholics, and on a bad day, can become excessively controlling and possessive. However, its negative qualities can be lessen by giving back to the community. By using is success to help others, 8 realizes that there is nothing more valuable than contributing to the greater good.",

                9: " As the final single digit within numerology, 9 connotes an old soul. 9 is no stranger life’s ups-and-downs of life — been there, done that. Accordingly, 9 can effortlessly synthesize large quantities of stimuli, psychically connecting the dots to form a cohesive whole. The mission for 9 is to reach its highest state of consciousness, and to help others also achieve this spiritual awareness. 9 isn’t afraid to transform, and its malleable spirit inspires others to explore their own ranges of motion. Since 9, in many ways, has transcended the physical plane, it must constantly remember to anchor itself. 9 must learn to balance the abstract with the tangible, ultimately finding its place at the intersection of fantasy and reality."
            }
            const day = dob.getUTCDate();
            const month = dob.getMonth() + 1;
            const year = dob.getFullYear();

            let primaryNumber;
            primaryNumber = day % 9 ? day % 9 : 9;

            let lifeyear, lifeMonth;

            lifeyear = year % 9 ? year % 9 : 9;

            lifeMonth = month > 9 ? month - 9 : month;

            let lifeNumber = primaryNumber + lifeyear + lifeMonth;

            // destiny number
            let destinyNumber = 0;
            for (let i = 0; i < name.length; i++) {

                if (name[i].toUpperCase() === 'A' || name[i].toUpperCase() === 'J' || name[i].toUpperCase() === 'S') {
                    destinyNumber += 1;
                } else if (name[i].toUpperCase() === 'B' || name[i].toUpperCase() === 'K' || name[i].toUpperCase() === 'T') {
                    destinyNumber += 2;
                } else if (name[i].toUpperCase() === 'C' || name[i].toUpperCase() === 'L' || name[i].toUpperCase() === 'U') {
                    destinyNumber += 3;
                } else if (name[i].toUpperCase() === 'D' || name[i].toUpperCase() === 'M' || name[i].toUpperCase() === 'V') {
                    destinyNumber += 4;
                } else if (name[i].toUpperCase() === 'E' || name[i].toUpperCase() === 'N' || name[i].toUpperCase() === 'W') {
                    destinyNumber += 5;
                } else if (name[i].toUpperCase() === 'F' || name[i].toUpperCase() === 'O' || name[i].toUpperCase() === 'X') {
                    destinyNumber += 6;
                } else if (name[i].toUpperCase() === 'G' || name[i].toUpperCase() === 'P' || name[i].toUpperCase() === 'Y') {
                    destinyNumber += 7;
                } else if (name[i].toUpperCase() === 'H' || name[i].toUpperCase() === 'Q' || name[i].toUpperCase() === 'Z') {
                    destinyNumber += 8;
                } else if (name[i].toUpperCase() === 'I' || name[i].toUpperCase() === 'R') {
                    destinyNumber += 9;
                }

            }
            destinyNumber % 9 ? destinyNumber %= 9 : destinyNumber = 1


            return {
                name: name,
                primaryNumber: primaryNumber,
                destinyNumber: destinyNumber,
                lifeNumber: lifeNumber > 9 ? lifeNumber % 9 : lifeNumber,
                message: destiny[destinyNumber]
            }
        }
        const one = calculateNumerology(this.firstName, this.firstDate);
        const two = calculateNumerology(this.secondName, this.secondDate);

        this.firstNumerology = one;
        this.secondNumerology = two;

        this._showHoroscopeAndNumerology();
    }

    _showHoroscopeAndNumerology() {
        const monthWord = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        document.getElementById('firstDate').innerText = `${this.firstDate.getUTCDate()}-${monthWord[this.firstDate.getUTCMonth()]}-${this.firstDate.getUTCFullYear()}.`;

        document.getElementById('firstSign').innerText = this.firstSign;
        document.getElementById('firstPrimary').innerText = this.firstNumerology.primaryNumber;
        document.getElementById('firstSecondary').innerText = this.firstNumerology.lifeNumber;
        document.getElementById('firstMessage').innerText = this.firstNumerology.message;
        document.getElementById('firstDestiny').innerText = this.firstNumerology.destinyNumber;

        document.getElementById('secondDate').innerText = `${this.secondDate.getUTCDate()}-${monthWord[this.secondDate.getUTCMonth()]}-${this.secondDate.getUTCFullYear()}.`;

        document.getElementById('secondSign').innerText = this.secondSign;
        document.getElementById('secondPrimary').innerText = this.secondNumerology.primaryNumber;
        document.getElementById('secondSecondary').innerText = this.secondNumerology.lifeNumber;
        document.getElementById('secondMessage').innerText = this.secondNumerology.message;
        document.getElementById('secondDestiny').innerText = this.secondNumerology.destinyNumber;


        document.getElementById('compatibility').innerText = this.compatibility;

    }

    _calculateResult() {

        const flames = ["F", "L", "A", "M", "E", "S"];
        const lakme = ['L', 'A', 'K', 'M', 'E'];

        // REMOVE COMMON LETTERS FROM THE NAMES
        const resultantString = this.firstName.concat(this.secondName).split('');

        for (let i = 0; i < resultantString.length; i++) {
            for (let j = i + 1; j < resultantString.length; j++) {

                if (resultantString[i] === resultantString[j]) {
                    resultantString.splice(j, 1);
                    resultantString.splice(i, 1);
                }
            }
        }

        const number = resultantString.length;

        function calculateD_Queue(array) {

            // CREATE THE D-QUEUE TO MINIMIZE FLAMES ARRAY TO SINGLE LETTER 

            let cur = 0; // global variable to locate the current position of the pointer of the flames array
            let pass = 0;

            while (array.length >= 2) {

                if (cur < 0) {
                    cur = 0;
                }
                for (let i = 0; i < number; i++) {
                    cur++;
                    if (cur > array.length - 1) {
                        cur = 0;
                    }
                }
                cur--;
                array.splice(cur, 1);
            }

        }

        calculateD_Queue(flames);
        calculateD_Queue(lakme);

        // let result,result1;

        switch (flames[0]) {
            case "F":
                this.result = "FRIENDS";
                break;
            case "L":
                this.result = "LOVE";
                break;
            case "A":
                this.result = "ADMIRE";
                break;
            case "M":
                this.result = "MARRY";
                break;
            case "E":
                this.result = "ENEMY";
                break;
            case "S":
                this.result = "SIBLINGS";
                break;
        };
        switch (lakme[0]) {
            case "F":
                this.result1 = "FRIENDS";
                break;
            case "L":
                this.result1 = "LOVE";
                break;
            case "A":
                this.result1 = "ADMIRE";
                break;
            case "M":
                this.result1 = "MARRY";
                break;
            case "E":
                this.result1 = "ENEMY";
                break;
            case "S":
                this.result1 = "SIBLINGS";
                break;
        };

        this._showLoveCalculation();
        this._onReset();
    }

    _showLoveCalculation() {

        document.getElementById('firstName').innerText = this.firstName;
        document.getElementById('secondName').innerText = this.secondName;
        document.getElementById('flames').innerText = this.result;
        document.getElementById('lakme').innerText = this.result1;

    }

    _displayModal() {
        document.getElementById('modal').style.display = 'flex';
        setTimeout(() => {
            document.getElementById('modal').style.display = 'none';

        }, 2500)
    }

    showInfo() {
        document.getElementById('about').classList.remove('invisible');
    }
    hideInfo() {
        document.getElementById('about').classList.add('invisible');
    }

    _onSubmit() {
        const form1 = document.getElementById('form-1');
        const form2 = document.getElementById('form-2');
        const outputSection = document.querySelector('.output');

        form1.addEventListener('submit', (e) => {
            e.preventDefault();
            document.getElementById('form-1').style.opacity = 0;
            document.getElementById('form-1').style.zIndex = -5;
            document.getElementById('form-2').style.opacity = 1;
            document.getElementById('form-2').style.zIndex = 1;
            this._getFirstName();
            document.getElementById('second').focus();
        });

        form2.addEventListener('submit', (e) => {
            e.preventDefault();
            outputSection.style.display = 'grid';
            document.getElementById('form-2').style.opacity = 0;
            document.getElementById('form-2').style.zIndex = -5;
            document.getElementById('form-1').style.opacity = 1;
            document.getElementById('form-1').style.zIndex = 1;
            this._getSecondName();
            this._displayModal();
            setTimeout(() => outputSection.scrollIntoView(), 2500);
        });
    }

    _onReset() {

        document.getElementById('first').value = '';
        document.getElementById('second').value = '';
        document.getElementById('first-date').value = '';
        document.getElementById('second-date').value = '';

        document.getElementById('first').focus();
    }

    init() {
        starting();
        this._onSubmit();
    }

}

const Obj = new LoveCalculator();

Obj.init();



function starting() {
    document.documentElement.scrollIntoView('#header');
}

document.getElementById('btn').addEventListener('click', () => {
    console.log('btn clicked')
    document.getElementById('about').style.display = 'flex';

});

document.getElementById('cross').addEventListener('click', () => {
    console.log('cross clicked');
    document.getElementById('about').style.display = 'none';

});