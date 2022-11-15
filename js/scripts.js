/*!
    * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });

    // Rosary day detection
    var day = new Date().getDay();
    const rosaryTitle = [
        "Peristiwa Mulia - Minggu",
        "Peristiwa Gembira - Senin",
        "Peristiwa Sedih - Selasa",
        "Peristiwa Mulia - Rabu",
        "Peristiwa Terang - Kamis",
        "Peristiwa Sedih - Jumat",
        "Peristiwa Gembira - Sabtu",
    ];
    const rosaryContent = [
        [
            // Peristiwa Mulia - Minggu
            {
                'title': 'Peristiwa Mulia #1 - Yesus bangkit dari antara orang-orang mati',
                'bacaan': '"Malaikat itu berkata, janganlah kamu takut; sebab aku tahu kamu mencari Yesus yang disalibkan itu. Ia tidak ada di sini, sebab Ia telah bangkit, sama seperti yang telah dikatakan-Nya (Mat 28:5-6)',
                'renungan': 'Bapa, mampukanlah kami melanjutkan misi Putra-Mu yaitu memberitakan Injil kepada semua orang agar kerajaan-Mu menjadi nyata di bumi ini.'
            },
            {
                'title': 'Peristiwa Mulia #2 - Yesus naik ke surga',
                'bacaan': '"Sesudah Ia mengatakan demikian, Ia diangkat ke surga disaksikan oleh mereka, dan awan menutup-Nya dari pandangan mereka. "Hai orang Galilea, mengapa kamu berdiri melihat ke langit? Yesus ini, yang diangkat ke surga meninggalkan kamu, akan kembali dengan cara yang sama seperti kamu liat Dia naik ke surga."" (Kis 1:9-11)',
                'renungan': 'Bapa, Engkau tumpuan hidup dan harapan kami. Tanamkanlah dalam diri kami keyakinan bahwa Engkau menyertai kami selalu hingga akhir zaman.'
            },
            {
                'title': 'Peristiwa Mulia #3 - Roh Kudus turun atas Para Rasul',
                'bacaan': '"Tiba-tiba terdengarlah bunyi dari langit seperti tiupan angin keras yang memenuhi seluruh rumah, di mana mereka duduk.., lalu mereka semua dipenuhi Roh Kudus, dan mulai berbicara dalam bahasa lain, seperti yang diberikan Roh itu kepada mereka untuk dikatakan" (Kis 2:2,4)',
                'renungan': 'Bapa, semoga Roh Kudus-Mu membimbing hidup kami dalam kasih dan kebenaran-Mu, serta menjadikan kami layak dihadapan-Mu.'
            },
            {
                'title': 'Peristiwa Mulia #4 - Maria diangkat ke surga',
                'bacaan': '"Jikalau kita percaya, bahwa Yesus telah mati dan telah bangkit, maka kita percaya juga bahwa dengan perantaraan Yesus, Allah akan mengumpulkan bersama-sama dengan Dia mereka yang telah meninggal. Sesudah itu kita yang hidup, yang masih tinggal, akan diangkat bersama-sama dengan mereka dalam awan menyongsong Tuhan di angkasa. Demikianlah kita akan selama-lamanya bersama-sama dengan Tuhan" (1 Tes 4: 14,17)',
                'renungan': 'Bapa, berilah kami iman yang hidup, dan jadikanlah kami saksi-Mu di hadapan sesama kami.'
            },
            {
                'title': 'Peristiwa Mulia #5 - Maria dimahkotai di surga',
                'bacaan': '"Tampaklah suatu tanda besar di langit; seorang perempuan berselubungkan matahari, dengan bulan di bawah kakinya dan sebuag mahkota dari dua belas bintang di atas kepalanya." (Why 12:1)',
                'renungan': 'Bapa, satu-satunya sumber kasih sejati, kobarkanlah dalam diri kami semangat kasih-Mu kepada bunda putra-Mu sebab kami memandangnya sebagai teladan pengikut Yesus.'
            }
        ],
        [
            // Peristiwa Gembira - Senin
            {
                'title': 'Peristiwa Gembira #1 - Maria menerima kabar dari malaikaat Gabriel',
                'bacaan': '"Salam hai engkau yang dikaruniai, Tuhan menyertai engkau; jangan takut, hai Maria, sebab engkau beroleh kasih karunia di hadapan Allah. Sesungguhnya engkau akan mengandung dan melahirkan seorang anak laki-laki dan hendaklah engkau menamai Dia Yesus" (Luk 1 : 28b,30b-31)',
                'renungan': 'Bapa, jika Engkau bersabda maka semuanya terjadi. Bersabdalah, ya Bapa, aku ini adalah hamba-Mu, terjadilah padaku menurut kehendak-Mu'
            },
            {
                'title': 'Peristiwa Gembira #2 - Maria mengunjungi Elisabeth',
                'bacaan': '"Diberkatilah engkau diantara semua perempuan dan diberkatilah buah rahimmu. Siapakah aku ini sampai ibu Tuhanku datang mengunjungi aku?" (Luk 1: 42-43)',
                'renungan': 'Bapa, hatiku memuliakan Dikau dan jiwaku bersorak-sorai karena Engkau Allah penuh kasih. Engkau menciptakan dan memelihara kami, anak-anak-Mu'
            },
            {
                'title': 'Peristiwa Gembira #3 - Yesus dilahirkan di Betlehem',
                'bacaan': '"Maria melahirkan seorang anak laki-laki....., lalu dibungkusnya dengan kain lampin dan dibaringkannya di dalam palungan, karena tidak ada tempat bagi mereka di rumah penginapan." (Luk 2: 7)',
                'renungan': 'Bapa, kami bersyukur karena Engkau telah merelakan putra-Mu menjadi manusia demi menebus dan mengampuni dosa-dosa kami. Jadikanlah kami layak menjadi anak-anak-Mu'
            },
            {
                'title': 'Peristiwa Gembira #4 - Yesus dipersembahkan dalam Bait Allah',
                'bacaan': '"Simeon berkata kepada Maria, "Sesungguhnya Anak ini ditentukan untuk menjatuhkan atau membangkitkan banyak orang di Israel dan untuk menjadi suatu tanda yang menimbulkan perbantahan. Kelak suatu pedang akan menembus jiwamu sendiri."" (Luk 2 : 34-35)',
                'renungan': 'Bapa, kami mempersembahkan segenap diri kami kepada-Mu. Terimalah kami sebagai persembahan yang layak, demi jasa Putra-Mu, Juruselamat kami.'
            },
            {
                'title': 'Peristiwa Gembira #5 - Yesus diketemukan dalam Bait Allah',
                'bacaan': '"Mengapa kamu mencari Aku? Tidakkah kamu tahu, bahwa Aku harus berada di dalam Rumah Bapa-Ku? Tetapi mereka tidak mengerti apa yang di katankan-Nya kepada mereka." (Luk 2 :49-50)',
                'renungan': 'Bapa, Putra-Mu sepenuhnya hidup demi kemuliaan-Mu dan keselamatan kami. Bentuklah kami menjadi serupa dengan Putra-Mu.'
            }
        ],
        [
            // Peristiwa Sedih - Selasa
            {
                'title': 'Peristiwa Sedih #1 - Yesus berdoa kepada Bapa-Nya di surga dalam sakratul maut',
                'bacaan': '"Ya, Bapa-Ku, jikalau Engkau berkenan, ambilah cawan ini dari hadapan-Ku, tetapi janganlah menurut kehendak-Ku, melainkan kehendak-Mu yang terjadi." (Mat 26:39)',
                'renungan': 'Bapa, ajarilah kami selalu mengikuti kehendak-Mu. Pada saat kami dicobai, Engkau pasti menyertai kami sebagai Bapa, karena Engkau sangat menyanyangi kami.'
            },
            {
                'title': 'Peristiwa Sedih #2 - Yesus didera',
                'bacaan': '"Mereka memukul kepala-Nya dengan buluh, dan meludahi-Nya dan berlutut menyembah-Nya. Sesudah mengolok-olokan Dia, mereka menanggalkan jubah ungu yang dipakai-Nya dan mengenakan lagi pakaian-Nya kepada-Nya" (Mrk 15 : 19-20a)',
                'renungan': 'Bapa, berilah kami rahmat untuk selalu mengingat sengsara-Mu, agar kami dapat berdiri teguh dan memikul salib dengan kasih.'
            },
            {
                'title': 'Peristiwa Sedih #3 - Yesus dimahkotai duri',
                'bacaan': '"Mereka menganyam sebuah mahkota duri dan menaruhnya di atas kepala-Nya. Kemudian mereka mulai memberi hormat kepada-Nya, katanya, "Salam, hai raja orang Yahudi!""(Mrk 15: 17-18)',
                'renungan': 'Bapa, Putra-Mu dimahkotai duri, tetapi Ia tidak pernah membenci algojo-Nya. Ajarilah kami mengampuni dan memberkati sesama kami.'
            },
            {
                'title': 'Peristiwa Sedih #4 - Yesus memanggul salib-Nya ke gunung Kalvari',
                'bacaan': '"Sambil memikul salib-Nya, Ia pergi keluar ketempat yang bernama Tempat Tengkorak, yang dalam bahasa Ibrani disebut Golgota." (Yoh 19 : 16b)',
                'renungan': 'Bapa, ajarilah kami memikul salib kehidupan ini tanpa mengeluh dan dengan penuh iman, supaya kami sungguh serupa dengan Yesus, Putra-Mu sendiri.'
            },
            {
                'title': 'Peristiwa Sedih #5 - Yesus wafat di salib',
                'bacaan': '"Yesus berseru dengan suara nyaring: "Ya Bapa, ke dalam tangan-Mu Ku serahkan nyawa-Ku". Sesudah berkata demikian Ia menyerahkan nyawa-Nya" (Luk 23: 46)',
                'renungan': 'Bapa, hadirlah dekat kami bersama Putra dan Roh-Mu pada saat kami menghadapi kematian, dan terimalah kami dalam kerjaan kasih-Mu yang kekal.'
            }
        ],
        [
            // Peristiwa Mulia - Rabu
            {
                'title': 'Peristiwa Mulia #1 - Yesus bangkit dari antara orang-orang mati',
                'bacaan': '"Malaikat itu berkata, janganlah kamu takut; sebab aku tahu kamu mencari Yesus yang disalibkan itu. Ia tidak ada di sini, sebab Ia telah bangkit, sama seperti yang telah dikatakan-Nya (Mat 28:5-6)',
                'renungan': 'Bapa, mampukanlah kami melanjutkan misi Putra-Mu yaitu memberitakan Injil kepada semua orang agar kerajaan-Mu menjadi nyata di bumi ini.'
            },
            {
                'title': 'Peristiwa Mulia #2 - Yesus naik ke surga',
                'bacaan': '"Sesudah Ia mengatakan demikian, Ia diangkat ke surga disaksikan oleh mereka, dan awan menutup-Nya dari pandangan mereka. "Hai orang Galilea, mengapa kamu berdiri melihat ke langit? Yesus ini, yang diangkat ke surga meninggalkan kamu, akan kembali dengan cara yang sama seperti kamu liat Dia naik ke surga."" (Kis 1:9-11)',
                'renungan': 'Bapa, Engkau tumpuan hidup dan harapan kami. Tanamkanlah dalam diri kami keyakinan bahwa Engkau menyertai kami selalu hingga akhir zaman.'
            },
            {
                'title': 'Peristiwa Mulia #3 - Roh Kudus turun atas Para Rasul',
                'bacaan': '"Tiba-tiba terdengarlah bunyi dari langit seperti tiupan angin keras yang memenuhi seluruh rumah, di mana mereka duduk.., lalu mereka semua dipenuhi Roh Kudus, dan mulai berbicara dalam bahasa lain, seperti yang diberikan Roh itu kepada mereka untuk dikatakan" (Kis 2:2,4)',
                'renungan': 'Bapa, semoga Roh Kudus-Mu membimbing hidup kami dalam kasih dan kebenaran-Mu, serta menjadikan kami layak dihadapan-Mu.'
            },
            {
                'title': 'Peristiwa Mulia #4 - Maria diangkat ke surga',
                'bacaan': '"Jikalau kita percaya, bahwa Yesus telah mati dan telah bangkit, maka kita percaya juga bahwa dengan perantaraan Yesus, Allah akan mengumpulkan bersama-sama dengan Dia mereka yang telah meninggal. Sesudah itu kita yang hidup, yang masih tinggal, akan diangkat bersama-sama dengan mereka dalam awan menyongsong Tuhan di angkasa. Demikianlah kita akan selama-lamanya bersama-sama dengan Tuhan" (1 Tes 4: 14,17)',
                'renungan': 'Bapa, berilah kami iman yang hidup, dan jadikanlah kami saksi-Mu di hadapan sesama kami.'
            },
            {
                'title': 'Peristiwa Mulia #5 - Maria dimahkotai di surga',
                'bacaan': '"Tampaklah suatu tanda besar di langit; seorang perempuan berselubungkan matahari, dengan bulan di bawah kakinya dan sebuag mahkota dari dua belas bintang di atas kepalanya." (Why 12:1)',
                'renungan': 'Bapa, satu-satunya sumber kasih sejati, kobarkanlah dalam diri kami semangat kasih-Mu kepada bunda putra-Mu sebab kami memandangnya sebagai teladan pengikut Yesus.'
            }
        ],
        [
            // Peristiwa Terang - Kamis
            {
                'title': 'Peristiwa Terang #1 - Yesus dibaptis di Sungai Jordan',
                'bacaan': '"Sesudah dibaptis, Yesus segera keluar dari air dan pada waktu itu juga langit terbuka dan Ia melihat Roh Allah seperti burung merpati turun ke atas-Nya, lalu terdengarlah suara dari surga yang mengatakan "Inilah Anak-Ku yang terkasih, kepada-Nyalah Aku berkenan"" (Mat e : 16-17)',
                'renungan': 'Bapa, kami pun Engkau beri misi sebagai anak-Mu dan pengikut Yesus. Buatlah kami menerima tugas itu dengan hati terbuka dan penuh suka cita.'
            },
            {
                'title': 'Peristiwa Terang #2 - Yesus menyatakan diri-Nya dalam pesta pernikahan di Kana',
                'bacaan': '"Atas permintaan Maria, bunda-Nya, Yesus mengatasi kekurangan anggur. "Hal itu dilakukan Yesus..., sebagai yang pertama dari tanda-tanda-Nya dan dengan itu Ia telah menyatakan kemuliaan-Nya, dan murid-murid-Nya percaya kepada-Nya""(Yoh 2 : 11)',
                'renungan': 'Bapa, tolonglah kami mampu menghadapi setiap masalah hidup ini dengan tenang sambil mengandalkan kasih-Mu kepada kami.'
            },
            {
                'title': 'Peristiwa Terang #3 - Yesus memberitakan kerajaan Allah dan menyerukan pertobatan',
                'bacaan': '"Bertobatlah, sebab kerajaan surga sudah dekat!" Yesus pun berkeliling di seluruh Galilea; Ia mengajar dalam rumah-rumah ibadat dan memberitakan Injil Kerajaan Surga serta menyembuhkan orang-orang diantara bangsa itu." (Mat 4  17,23)',
                'renungan': 'Bapa, pertobatkanlah kami. Ampunilah dosa kami. Jadikanlah kami mampu mengampuni orang yang telah menyakiti kami.'
            },
            {
                'title': 'Peristiwa Terang #4 - Yesus menampakkan kemuliaan-Nya',
                'bacaan': '"Yesus berubah rupa di sebuah gunung yang tinggi. Wajah-Nya bercahaya seperti matahari. Allah bersabda kepada tiga rasul Yesus, "Inilah Anak-Ku yang terkasih, kepada-Nyalah Aku berkenan, dengarkanlah Dia"" (Mat 17 : 2,5)',
                'renungan': 'Bapa, ajarilah kami mendengarkan Yesus dan sepenuhnnya menerima ajaran-Nya. Izinkanlah kami semakin mengenal Dia, terutama dalam sengsara-Nya'
            },
            {
                'title': 'Peristiwa Terang #5 - Yesus menetapkan Ekaristi',
                'bacaan': '"Yesus mengambil roti, mengucap syukur, memecah-mecahkannya lalu memberikannya kepada mereka dan berkata, "Ambillah, inilah tubuh-Ku" Sesudah itu Ia mengambil cawan, mengucap syukur lalu memberikannya kepada mereka. Ia berkata, "Inilah darah-Ku yang ditumpahkan bagi banyak orang" (Mar 14: 22-24)',
                'renungan': 'Bapa, sucikan dan kuduskanlah kami pada saat kami menerima Tubuh dan Darah Putra-Mu yang terkasih; pakailah kami sekehendak-Mu.'
            }
        ],
        [
            // Peristiwa Sedih - Jumat
            {
                'title': 'Peristiwa Sedih #1 - Yesus berdoa kepada Bapa-Nya di surga dalam sakratul maut',
                'bacaan': '"Ya, Bapa-Ku, jikalau Engkau berkenan, ambilah cawan ini dari hadapan-Ku, tetapi janganlah menurut kehendak-Ku, melainkan kehendak-Mu yang terjadi." (Mat 26:39)',
                'renungan': 'Bapa, ajarilah kami selalu mengikuti kehendak-Mu. Pada saat kami dicobai, Engkau pasti menyertai kami sebagai Bapa, karena Engkau sangat menyanyangi kami.'
            },
            {
                'title': 'Peristiwa Sedih #2 - Yesus didera',
                'bacaan': '"Mereka memukul kepala-Nya dengan buluh, dan meludahi-Nya dan berlutut menyembah-Nya. Sesudah mengolok-olokan Dia, mereka menanggalkan jubah ungu yang dipakai-Nya dan mengenakan lagi pakaian-Nya kepada-Nya" (Mrk 15 : 19-20a)',
                'renungan': 'Bapa, berilah kami rahmat untuk selalu mengingat sengsara-Mu, agar kami dapat berdiri teguh dan memikul salib dengan kasih.'
            },
            {
                'title': 'Peristiwa Sedih #3 - Yesus dimahkotai duri',
                'bacaan': '"Mereka menganyam sebuah mahkota duri dan menaruhnya di atas kepala-Nya. Kemudian mereka mulai memberi hormat kepada-Nya, katanya, "Salam, hai raja orang Yahudi!""(Mrk 15: 17-18)',
                'renungan': 'Bapa, Putra-Mu dimahkotai duri, tetapi Ia tidak pernah membenci algojo-Nya. Ajarilah kami mengampuni dan memberkati sesama kami.'
            },
            {
                'title': 'Peristiwa Sedih #4 - Yesus memanggul salib-Nya ke gunung Kalvari',
                'bacaan': '"Sambil memikul salib-Nya, Ia pergi keluar ketempat yang bernama Tempat Tengkorak, yang dalam bahasa Ibrani disebut Golgota." (Yoh 19 : 16b)',
                'renungan': 'Bapa, ajarilah kami memikul salib kehidupan ini tanpa mengeluh dan dengan penuh iman, supaya kami sungguh serupa dengan Yesus, Putra-Mu sendiri.'
            },
            {
                'title': 'Peristiwa Sedih #5 - Yesus wafat di salib',
                'bacaan': '"Yesus berseru dengan suara nyaring: "Ya Bapa, ke dalam tangan-Mu Ku serahkan nyawa-Ku". Sesudah berkata demikian Ia menyerahkan nyawa-Nya" (Luk 23: 46)',
                'renungan': 'Bapa, hadirlah dekat kami bersama Putra dan Roh-Mu pada saat kami menghadapi kematian, dan terimalah kami dalam kerjaan kasih-Mu yang kekal.'
            }
        ],
        [
            // Peristiwa Gembira - Sabtu
            {
                'title': 'Peristiwa Gembira #1 - Maria menerima kabar dari malaikaat Gabriel',
                'bacaan': '"Salam hai engkau yang dikaruniai, Tuhan menyertai engkau; jangan takut, hai Maria, sebab engkau beroleh kasih karunia di hadapan Allah. Sesungguhnya engkau akan mengandung dan melahirkan seorang anak laki-laki dan hendaklah engkau menamai Dia Yesus" (Luk 1 : 28b,30b-31)',
                'renungan': 'Bapa, jika Engkau bersabda maka semuanya terjadi. Bersabdalah, ya Bapa, aku ini adalah hamba-Mu, terjadilah padaku menurut kehendak-Mu'
            },
            {
                'title': 'Peristiwa Gembira #2 - Maria mengunjungi Elisabeth',
                'bacaan': '"Diberkatilah engkau diantara semua perempuan dan diberkatilah buah rahimmu. Siapakah aku ini sampai ibu Tuhanku datang mengunjungi aku?" (Luk 1: 42-43)',
                'renungan': 'Bapa, hatiku memuliakan Dikau dan jiwaku bersorak-sorai karena Engkau Allah penuh kasih. Engkau menciptakan dan memelihara kami, anak-anak-Mu'
            },
            {
                'title': 'Peristiwa Gembira #3 - Yesus dilahirkan di Betlehem',
                'bacaan': '"Maria melahirkan seorang anak laki-laki....., lalu dibungkusnya dengan kain lampin dan dibaringkannya di dalam palungan, karena tidak ada tempat bagi mereka di rumah penginapan." (Luk 2: 7)',
                'renungan': 'Bapa, kami bersyukur karena Engkau telah merelakan putra-Mu menjadi manusia demi menebus dan mengampuni dosa-dosa kami. Jadikanlah kami layak menjadi anak-anak-Mu'
            },
            {
                'title': 'Peristiwa Gembira #4 - Yesus dipersembahkan dalam Bait Allah',
                'bacaan': '"Simeon berkata kepada Maria, "Sesungguhnya Anak ini ditentukan untuk menjatuhkan atau membangkitkan banyak orang di Israel dan untuk menjadi suatu tanda yang menimbulkan perbantahan. Kelak suatu pedang akan menembus jiwamu sendiri."" (Luk 2 : 34-35)',
                'renungan': 'Bapa, kami mempersembahkan segenap diri kami kepada-Mu. Terimalah kami sebagai persembahan yang layak, demi jasa Putra-Mu, Juruselamat kami.'
            },
            {
                'title': 'Peristiwa Gembira #5 - Yesus diketemukan dalam Bait Allah',
                'bacaan': '"Mengapa kamu mencari Aku? Tidakkah kamu tahu, bahwa Aku harus berada di dalam Rumah Bapa-Ku? Tetapi mereka tidak mengerti apa yang di katankan-Nya kepada mereka." (Luk 2 :49-50)',
                'renungan': 'Bapa, Putra-Mu sepenuhnya hidup demi kemuliaan-Mu dan keselamatan kami. Bentuklah kami menjadi serupa dengan Putra-Mu.'
            }
        ],
    ];

    $("#nama-peristiwa").html(rosaryTitle[day]);
    for (var i = 1; i <=5; i++) {
        $("#peristiwa-"+i+"-title > h2 > button").html(rosaryContent[day][i-1].title);
        $("#peristiwa-"+i+"-bacaan").html(rosaryContent[day][i-1].bacaan);
        $("#peristiwa-"+i+"-renungan").html(rosaryContent[day][i-1].renungan);
    }
    
    
})(jQuery); // End of use strict
