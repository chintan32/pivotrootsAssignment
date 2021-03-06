$.ajax({
    url: 'js/data.json',
    dataType: 'json',
    success: function(data) {
        var yearlyCard = `
        ${data.map((item,i)=>
            i === 0 ? 
            `<div class="main-block" id=${Object.keys(item)[0]+"-tab"}>
                <div class="main-block-wrap">
                    <div class="course-tab-title">
                        <a href="yearly-tab" class="tab-title">yearly courses</a>
                        <a href="monthly-tab" class="tab-title active">monthly courses</a>
                    </div>
                    <div class="card-body">
                        <div class="card-top-panel flexbox">
                            <div class="grade-select-wrap">
                                <select class="grade-select" id="monthly-grade-select">
                                    ${item?.monthly?.map((monthly,k)=>
                                        `<option value="${monthly.grade}">${monthly.grade}</option>`    
                                    ).join('')}
                                </select>
                            </div>
                            <div class="card-body-tab flexbox justify-end align-center">
                                ${item.monthly.map((monthly,k)=>
                                    `<div class="card-body-tab-wrap" id=${"monthly"+monthly.grade.replace(/\s+/g, '')}>
                                        <ul class="flexbox justify-end align-center">
                                            ${
                                                Object.keys(monthly.boards).map((boardsKey,a)=>
                                                `<li>
                                                    <a href="${"monthly"+monthly.grade.replace(/\s+/g, '')+boardsKey.replace(/\s+/g, '')}" class="card-body-tab-a ${a === 0 && "active"}">${boardsKey}</a>
                                                </li>`
                                                ).join('')
                                            }    
                                        </ul>
                                    </div>`
                                ).join('')}
                            </div>
                        </div>
                        <div class="monthly-table-wrao">
                            ${item.monthly.map((monthly,k)=>
                                ` 
                                    ${
                                        Object.keys(monthly.boards).map((monthlyKey,a)=>
                                        `<div class="monthly-table" id=${("monthly"+monthly.grade.replace(/\s+/g, '')+monthlyKey).replace(/\s+/g, '')}>
                                            ${Object.keys(monthly.boards[monthlyKey]).map((sessions,b)=>
                                                `<div class="mt-row active flexbox">
                                                        <div class="col-padding check-col flexbox justify-center align-center">
                                                            <span class="check-icon"></span>
                                                        </div>
                                                        <div class="mt-col month-col col-padding">
                                                            <div class="month-wrap">
                                                                <h6 class="mnt">${monthly.boards[monthlyKey][sessions].valid}</h6>
                                                                <p class="mnt-desc">${monthly.boards[monthlyKey][sessions].refund}</p>
                                                            </div>
                                                        </div>
                                                        <div class="mt-col price-col col-padding">
                                                            <div class="price-wrap">
                                                                <h6 class="price">???${monthly.boards[monthlyKey][sessions].price} <span>???${monthly.boards[monthlyKey][sessions].price+2000}</span></h6>
                                                                <p class="dics-label">${monthly.boards[monthlyKey][sessions].discount}% OFF</p>
                                                            </div>
                                                        </div>
                                                        <div class="mt-col session-col col-padding">
                                                            <div class="session-wrap">
                                                                <h6 class="session-prc">???${monthly.boards[monthlyKey][sessions].per_class_price} per session</h6>
                                                                <p class="dics-label">${monthly.boards[monthlyKey][sessions].total_sessions} session</p>
                                                            </div>
                                                        </div>
                                                    </div>`
                                            ).join('')}
                                        </div>`
                                        ).join('')    
                                    }
                                `
                                
                            ).join('')}
                            
                        </div>
                    </div>
                </div>
                <div class="main-footer">
                    <div class="main-footer-wrap">
                        <div class="main-footer-top">
                            <div class="row">
                                <div class="main-footer-top-col col-three col-padding">
                                    <div class="main-footer-top-col-wrap">
                                        <h4>Monthly classes let you choose your own course topics</h4>
                                    </div>
                                </div>
                                <div class="main-footer-top-col col-three col-padding">
                                    <div class="main-footer-top-col-wrap">
                                        <h4>Each session lasts 45 minutes</h4>
                                    </div>
                                </div>
                                <div class="main-footer-top-col main-button-col col-three col-padding">
                                    <div class="main-footer-top-col-wrap flexbox justify-end">
                                        <button class="btn">Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="main-footer-bottom">
                            <div class="row justify-between">
                                <div class="col-padding right-col"><p>Refund same day <a href="#">term & condiotions</a> apply*</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>` :
            `<div class="main-block" id="${Object.keys(item)[0]+"-tab"}" style="display:none">
                    <div class="main-block-wrap">
                        <div class="course-tab-title">
                            <a href="yearly-tab" class="tab-title">yearly courses</a>
                            <a href="monthly-tab" class="tab-title active">monthly courses</a>
                        </div>
                        <div class="card-body">
                            <div class="card-top-panel flexbox">
                                <div class="grade-select-wrap">
                                    <select class="grade-select" name="grade" id="yearly-grade-select">
                                        ${item?.yearly?.map((yearly,k)=>
                                            `<option value="${yearly.grade}">${yearly.grade}</option>`    
                                        ).join('')}
                                    </select>
                                </div>
                                <div class="card-body-tab flexbox justify-end align-center">
                                        ${item.yearly.map((yearly,k)=>
                                            `<div class="card-body-tab-wrap" id=${"yearly"+yearly.grade.replace(/\s+/g, '')}>
                                                <ul class="flexbox justify-end align-center">
                                                    ${
                                                        Object.keys(yearly.boards).map((boardsKey,a)=>
                                                        `<li>
                                                            <a href="${"yearly"+yearly.grade.replace(/\s+/g, '')+boardsKey.replace(/\s+/g, '')}" class="card-body-tab-a ${a === 0 && "active"}">${boardsKey}</a>
                                                        </li>`
                                                        ).join('')
                                                    }    
                                                </ul>
                                            </div>`
                                        ).join('')}
                                </div>
                            </div>
                            <div class="cars-number-wrap">
                                ${item.yearly.map((yearly,k)=>
                                        Object.keys(yearly.boards).map((boardsKey,a)=>
                                            `<div class="card-numbers" id="${"yearly"+yearly.grade.replace(/\s+/g, '')+boardsKey.replace(/\s+/g, '')}">
                                                <div class="card-number-row flexbox">
                                                    <div class="card-number-col">
                                                    <p class="card-number-text">Total Sessions</p>
                                                    <p class="card-col-num">${yearly.boards[boardsKey].career_counselling_sessions}</p>
                                                </div>
                                                <div class="card-number-col">
                                                    <p class="card-number-text">Online Pre Assessments</p>
                                                    <p class="card-col-num">${yearly.boards[boardsKey].online_pre_assignments}</p>
                                                </div>
                                                <div class="card-number-col">
                                                    <p class="card-number-text">Online Post Assessments</p>
                                                    <p class="card-col-num">${yearly.boards[boardsKey].online_post_assignments}</p>
                                                </div>
                                                <div class="card-number-col">
                                                    <p class="card-number-text">Online Practice</p>
                                                    <p class="card-col-num">${yearly.boards[boardsKey].seats}</p>
                                                </div>
                                                <div class="card-number-col">
                                                    <p class="card-number-text">Online Test</p>
                                                    <p class="card-col-num">${yearly.boards[boardsKey].online_tests}</p>
                                                </div>
                                                <div class="card-number-col">
                                                    <p class="card-number-text">Career Counselling Sessions with Edu Coach</p>
                                                    <p class="card-col-num">${yearly.boards[boardsKey].career_counselling_sessions}</p>
                                                </div>
                                            </div>  
                                        </div>`
                                        ).join('')
                                ).join('')}
                            </div>
                            <div class="card-topics">
                                <h2 class="card-topic-head">Course Topics Include</h2>
                                <div class="row">
                                    <div class="col-three card-topic-col">
                                        <h6>Introduction</h6>
                                        <ul>
                                            <li>Irrational Nuymbers</li>
                                            <li>Real Numbers and their Decimal</li>
                                            <li>Expections</li>
                                            <li>Represention Real Numbers on the </li>
                                            <li>Number Line</li>
                                        </ul>
                                    </div>
                                    <div class="col-three card-topic-col">
                                        <h6>Introduction</h6>
                                        <ul>
                                            <li>Polynomials in One Variable</li>
                                            <li>Zeroes of a Polynomials</li>
                                            <li>Remainder Theorem</li>
                                            <li>Factorisation of Polynomials</li>
                                            <li>Algebraic identities</li>
                                        </ul>
                                    </div>
                                    <div class="col-three card-topic-col">
                                        <h6>Introduction</h6>
                                        <ul>
                                            <li>Polynomials in One Variable</li>
                                            <li>Zeroes of a Polynomials</li>
                                            <li>Remainder Theorem</li>
                                            <li>Factorisation of Polynomials</li>
                                            <li>Algebraic identities</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main-footer">
                        <div class="main-footer-wrap">
                            <div class="main-footer-top">
                                ${item.yearly.map((yearly,k)=>
                                    Object.keys(yearly.boards).map((boardsKey,a)=>
                                        `
                                        <div class="footer-top-wrapper" id=${"Prcyearly"+yearly.grade.replace(/\s+/g, '')+boardsKey.replace(/\s+/g, '')}>
                                            <div class="row">
                                                <div class="main-footer-top-col col-three col-padding">
                                                        <div class="main-footer-top-col-wrap">
                                                            <h4>VACANT Seats <span>${yearly.boards[boardsKey].seats} seats</span>
                                                                <div class="footer-top-label">Fillnig Out soon</div>
                                                            </h4>
                                                            <p>Not a classroom, but 1:1  sessions.</p>
                                                        </div>
                                                    </div>
                                                    <div class="main-footer-top-col col-three col-padding">
                                                        <div class="main-footer-top-col-wrap">
                                                            <h4>Subscription cost: <span>???${yearly.boards[boardsKey].price} <span class="line-through">???${yearly.boards[boardsKey].price+2000}</span></span>
                                                                <div class="footer-top-label">Fillnig Out soon</div>
                                                            </h4>
                                                            <p>This cost is inclusive of the tablet cost. Per session cost is $129.</p>
                                                        </div>
                                                    </div>
                                                    <div class="main-footer-top-col col-three col-padding">
                                                        <div class="main-footer-top-col-wrap flexbox justify-end">
                                                            <div class="flexbox justify-end">
                                                                <button class="btn">Book Now</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>`
                                    ).join('')  
                                ).join('')}
                            </div>
                            <div class="main-footer-bottom">
                                <div class="row justify-between">
                                    <div class="col-padding left-col">
                                        <h6>You can also avail a 8 inch and 10 inch tablet with your subscription</h6>
                                    </div>
                                    <div class="col-padding right-col"><p>Guaranteed <a href="#">term & condiotions</a> apply*</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
            ).join('')}
        `
        $('#mydata').append(yearlyCard);
    },
    error: function(jqXHR, textStatus, errorThrown){
        alert('Error: ' + textStatus + ' - ' + errorThrown);
    }
});

$( document ).ready(function() {
    //=============Montyhly/Yearly==========
    $('.course-tab-title a').click(function(e){
        e.preventDefault();
        $('.main-block').hide();
        $('.course-tab-title a.active').removeClass('active');
        var panel = $(this).attr('href');
        $(`[href="${panel}"]`).addClass('active'); 
        $("#"+panel).fadeIn(1000);
        return false; 
    }); 
    
    //=============Montyhly Select Board==========
    //show the monthly tab content
    $('#monthly-grade-select').change(function(){
        dropdown = $('#monthly-grade-select').val();
        //first hide all tabs again when a new option is selected
        $('#monthly-tab .card-body-tab-wrap').hide();
        //then show the tab content of whatever option value was selected
        // $("input").trigger("click");
        console.log("#monthly"+dropdown.replace(/\s+/g, ''))
        $("#monthly"+dropdown.replace(/\s+/g, '')).find('li:first-child a').trigger('click'); 
        $('#' + "monthly" + dropdown.replace(/\s+/g, '')).show();
    });

    //=============Yearly Select Board==========
    //show the yearly tab content
    $('#yearly-grade-select').change(function(){
        dropdown = $('#yearly-grade-select').val();
        //first hide all tabs again when a new option is selected
        $('#yearly-tab .card-body-tab-wrap').hide();
        //then show the tab content of whatever option value was selected
        $("#yearly"+dropdown.replace(/\s+/g, '')).find('li:first-child a').trigger('click');
        $('#' + "yearly" + dropdown.replace(/\s+/g, '')).show();
    });

    //=============Yearly Select Board Item==========
    $('.card-body-tab-a').click(function(){
        $(this).parents('.main-block').find('.card-numbers').hide();
        $(this).parents('.main-block').find('.monthly-table').hide();
        $(this).parents('.main-block').find('.footer-top-wrapper').hide();
        $(this).parents('.main-block').find('.card-body-tab-a.active').removeClass('active');
        $(this).addClass('active');                
        var panel = $(this).attr('href');
        $("#"+panel).fadeIn(1000);
        $("#Prc"+panel).fadeIn(1000);
        return false; 
    }); 
});