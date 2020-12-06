jQuery(document).ready(function() {
	var interval = setInterval(function() {
		if (jQuery('.basic-yop-poll-container').length) {
			jQuery('.basic-yop-poll-container input[type=text]').attr('maxlength', '500');
			clearInterval(interval);
		}
        }, 500);

	document.domain = 'arbetetsmuseum.se';
	jQuery('iframe#visning').load(function() {
		this.style.height = this.contentWindow.document.body.offsetHeight + 50 + 'px';
	});

	jQuery('#popup-kampanj').click(function() {
		jQuery(this).hide();
	});

	var isInIframe = (window.location != window.parent.location) ? true : false;
	if (isInIframe) {
		jQuery('.single-kampanjsida a').click(function() {
			window.top.location.href = jQuery(this).attr('href');
		});
	}	

	/*--------------------------------------
	-----------------BROWSER FIXES--------*/
	if (typeof Modernizr !== 'undefined' && !Modernizr.csstransitions) {
		jQuery(function() {
			jQuery('.box, .app-box-one-third, .app-box-two-third, .full-width-box').hover(function() {
				jQuery(this).find('.box-content.half').animate({bottom: '0'},{queue: false, duration: 500});
			}, function(){
				jQuery(this).find('.box-content.half').animate({bottom: '-65%'},{queue: false, duration: 500});
			});
		});
	}
	
	/*--------------------------------------
	--------------Campaign modal fixes----*/
	jQuery('.kampanjsida .content-container').css('display', 'none');
	
	/*--------------------------------------
	-----------------MENY-----------------*/
	if (window.location.pathname == '/ewk-museet/') {
		jQuery('#menu-item-36').removeClass('current-menu-parent current-menu-ancestor');
		jQuery('#menu-item-1987').removeClass('current-menu-item');
	}


    /*--------------------------------------
    -----------------UNDERMENY---------------*/
	if (jQuery('#sidebar').length != 0 && jQuery(window ).width() < 1218) {
		if (jQuery('div.widget_nav_menu ul.menu').length != 0) {
			var list = jQuery('div.widget_nav_menu ul.menu');
			var listItems = list.children('li.menu-item:not(:first)');
			list.append(listItems.get().reverse());
		} else {
			var list = jQuery('#sidebar ul');
			var listItems = list.children('li.page_item');
			list.append(listItems.get().reverse())
		}
	}

    /*--------------------------------------
    -----------------FOOTER---------------*/
	var footer = {
		setEmailPlaceholder: function() {
			var email = jQuery('#id_email');

			email.attr('placeholder', 'E-postadress...');
		},
		removeEmailLabel: function() {
			var label = jQuery("label[for='id_email']");

			label.remove();
		},
		setSubscribeText: function() {
			var form = jQuery('.newsletter-signup');

			form.before('<div class="subscribe-text">Skriv in din e-postadress och prenumerera på vårt nyhetsbrev.</div>')
		}
	};

	footer.setEmailPlaceholder();
	footer.removeEmailLabel();
	footer.setSubscribeText();
    
    /*--------------------------------------
    -----------RESTAURANG LAXHOLMEN-------*/
    var laxholmen = {
        setCharacters: function() {
            var box = jQuery('.restaurant-laxholmen .todays-dish:not(.closed)');

            box.text(function(index, currentText) {
                return currentText.substr(0, 38) + '...';
            });
        }
    };

    laxholmen.setCharacters();

    /*--------------------------------------
    ------------ARBETSLIVSMUSEER----------*/
    var workingMuseums = {
        imagePath: '/wp-content/themes/etendo/arbetslivsmuseer/image.php?id=',
        search: function(searchTerm) {
            var that = this;

            jQuery.ajax({
                url: ajax_object.ajaxurl,
                type: 'post',
                dataType: 'json',
                data: {
                    searchTerm: searchTerm, 
                    action: 'myajax_search_museums'
                },
                success: function(museums) {
                    that.render(museums);
                    jQuery('.museum-search').val('');
                }
            });
        },
        render: function(museums) {
            var that = this,
                body = jQuery('.museum-search-results');
            body.empty();
            body.append('<h1>Sökresultat</h1><div class="fusion-separator sep-single" style="border-color:#000007;margin-top:10px;margin-bottom:12px;width:2;"></div>');
            if (museums.length > 0) {
                jQuery.each(museums, function(index, museum) {
                    var name = (museum.MuseumName != null) ? museum.MuseumName : '',
                        address = (museum.VisitAddress != null) ? museum.VisitAddress : '',
                        city = (museum.visitCity != null) ? museum.visitCity : '',
                        gps = (museum.Gps != null) ? museum.Gps : '',
                        landscape = (museum.visitLandscape != null) ? museum.visitLandscape : '',
                        phone = (museum.Phone != null) ? museum.Phone : '',
                        homepage = (museum.Homepage != null) ? museum.Homepage : '',
                        note = (museum.Note != null) ? museum.Note : '';

                    body.append('<div class="museum-parent"><p id="' + museum.K_id_arbu + '" class="heading">' + name + '</p><div class="museum-child"><table><tbody><tr><td>Besöksadress</td><td>' + address + '</td></tr><tr><td>Ort</td><td>' + city + '</td></tr><tr><td>GPS</td><td class="gps" id="gps-' + museum.K_id_arbu + '">' + gps + '</td></tr><tr><td>Landskap</td><td>' + landscape + '</td></tr><tr><td>Telefonnummer</td><td>' + phone + '</td></tr><tr><td>Hemsida</td><td><a href="' + homepage + '" target="_blank">' + homepage + '</a></td></tr><tr><td>Beskrivning</td><td>' + note + '</td></td></tbody></table><div id="mini-map-' + museum.K_id_arbu + '" class="mini-map fusion-one-third one_third fusion-column"></div><div class="fusion-two-third two_third fusion-column last"><img id="image-' + museum.K_id_arbu + '" src="' + that.imagePath + museum.K_id_arbu + '"" alt="' + name + ' - bild."></div></div></div><div class="fusion-separator sep-single" style="border-color:#000007;margin-top:10px;margin-bottom:12px;width:2;"></div>');
                });
            } else {
                body.append('Din sökning gav tyvärr inget resultat.');
            }
        },
        showMiniMap: function(heading) {
            var id = heading.attr('id'),
                name = heading.text();

            var coords = jQuery('#gps-' + id).text(),
                coords = (coords != null) ? coords.split(/[^\d\w]+/) : null;

            if (coords != null) {
                var lat = this.convertDMSToDD(coords[0], coords[1], coords[2], coords[3]),
                    lng = this.convertDMSToDD(coords[4], coords[5], coords[6], coords[7]),
                    latlng = new google.maps.LatLng(lat, lng);

                var mapOptions = {
                    center: {lat: lat, lng: lng},
                    zoom: 7
                };
                
                var miniMap = heading.next('.mini-map'),
                    map = new google.maps.Map(document.getElementById('mini-map-' + id), mapOptions);

                var marker = new google.maps.Marker({
                    position: latlng,
                    map: map,
                    title: name
                });
            }
        },
        getAll: function() {
            var that = this;

            jQuery.ajax({
                url: ajax_object.ajaxurl,
                type: 'post',
                dataType: 'json',
                data: {action: 'myajax_get_museums'},
                success: function(museums) {
                    that.renderMarkers(museums);
                }
            });
        },
        renderMarkers: function(museums) {
            var that = this;

            var mapOptions = {
                center: { lat: 63.26194726376569, lng: 15.598162312499994},
                zoom: 5
            };
            var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

            var markers = [];
            jQuery.each(museums, function(index, element) {
                var coords = element.Gps,
                    coords = (coords != null) ? coords.split(/[^\d\w]+/) : null;

                if (coords != null) {
                    var lat = that.convertDMSToDD(coords[0], coords[1], coords[2], coords[3]),
                        lng = that.convertDMSToDD(coords[4], coords[5], coords[6], coords[7]),
                        latlng = new google.maps.LatLng(lat, lng);

                    var marker = new google.maps.Marker({
                        position: latlng,
                        title: element.MuseumName
                    });
                    var contentString = '<div class="museum-map-parent" id="' + element.K_id_arbu + '"><h1>' + element.MuseumName + '</h1></div>' + 
                                        '<p>' + element.Note + '</p>';
                    var infowindow = new google.maps.InfoWindow({
                        content: contentString
                    });
                    google.maps.event.addListener(marker, 'click', function() {
                        infowindow.open(map, marker);
                    });

                    markers.push(marker);
                }
            });

            var mcOptions = [
                {
                    url: 'https://cdn.rawgit.com/googlemaps/js-marker-clusterer/gh-pages/images/m2.png',
                    height: 56,
                    width: 56
                },
                {
                    url: 'https://cdn.rawgit.com/googlemaps/js-marker-clusterer/gh-pages/images/m2.png',
                    height: 56,
                    width: 56
                },
                {
                    url: 'https://cdn.rawgit.com/googlemaps/js-marker-clusterer/gh-pages/images/m2.png',
                    height: 56,
                    width: 56
                },
                {
                    url: 'https://cdn.rawgit.com/googlemaps/js-marker-clusterer/gh-pages/images/m2.png',
                    height: 56,
                    width: 56
                },
                {
                    url: 'https://cdn.rawgit.com/googlemaps/js-marker-clusterer/gh-pages/images/m2.png',
                    height: 56,
                    width: 56
                }
            ];

			var options = {
				minimumClusterSize: '1000'
			};

            var markerClusterer = new MarkerClusterer(map, markers, options);
            markerClusterer.setStyles(mcOptions);
        },
        convertDMSToDD: function(direction, degree, minutes, seconds) {
            var total = ((minutes + seconds) / 60) / 1000,
                coord = parseFloat(degree) + total;
            
            if (direction == 'S' || direction == 'W') {
                coord = coord * -1;
            }

            return coord;
        },
        get: function(museum_id) {
            var that = this;

            jQuery.ajax({
                url: ajax_object.ajaxurl,
                type: 'post',
                dataType: 'json',
                data: {museum_id: museum_id, action: 'myajax_get_museum'},
                success: function(museum) {
                    var name = (museum.MuseumName != null) ? museum.MuseumName : '',
                        address = (museum.VisitAddress != null) ? museum.VisitAddress : '',
                        city = (museum.visitCity != null) ? museum.visitCity : '',
                        gps = (museum.Gps != null) ? museum.Gps : '',
                        landscape = (museum.visitLandscape != null) ? museum.visitLandscape : '',
                        phone = (museum.Phone != null) ? museum.Phone : '',
                        homepage = (museum.Homepage != null) ? museum.Homepage : '',
                        note = (museum.Note != null) ? museum.Note : '';

                    var body = jQuery('.museum-search-results');
                    body.empty(); 
                    body.append('<div class="fusion-separator sep-single" style="border-color:#000007;margin-top:10px;margin-bottom:12px;width:2;"></div><div class="museum-parent"><p id="' + museum.K_id_arbu + '" class="heading">' + name + '</p><div class="museum-child"><table><tbody><tr><td>Besöksadress</td><td>' + address + '</td></tr><tr><td>Ort</td><td>' + city + '</td></tr><tr><td>GPS</td><td class="gps" id="gps-' + museum.K_id_arbu + '">' + gps + '</td></tr><tr><td>Landskap</td><td>' + landscape + '</td></tr><tr><td>Telefonnummer</td><td>' + phone + '</td></tr><tr><td>Hemsida</td><td><a href="' + homepage + '" target="_blank">' + homepage + '</a></td></tr><tr><td>Beskrivning</td><td>' + note + '</td></td></tbody></table><div id="mini-map-' + museum.K_id_arbu + '" class="mini-map fusion-one-third one_third fusion-column"></div><div class="fusion-two-third two_third fusion-column last"><img id="image-' + museum.K_id_arbu + '" src="' + that.imagePath + museum.K_id_arbu + '.jpg" alt="' + name + ' - bild."></div></div></div><div class="fusion-separator sep-single" style="border-color:#000007;margin-top:10px;margin-bottom:12px;width:2;"></div>');

                    var heading = jQuery('.heading'),
                        child = jQuery('.museum-child');

                    heading.addClass('museum-parent-yellow');
                    child.show();

                    var coords = museum.Gps,
                        coords = (coords != null) ? coords.split(/[^\d\w]+/) : null;

                    if (coords != null) {
                        var lat = that.convertDMSToDD(coords[0], coords[1], coords[2], coords[3]),
                            lng = that.convertDMSToDD(coords[4], coords[5], coords[6], coords[7]),
                            latlng = new google.maps.LatLng(lat, lng);

                        var mapOptions = {
                            center: {lat: lat, lng: lng},
                            zoom: 11
                        };
                        var map = new google.maps.Map(document.getElementById('mini-map-' + museum['K_id_arbu']), mapOptions);

                        var marker = new google.maps.Marker({
                            position: latlng,
                            map: map,
                            title: museum.MuseumName
                        });
                    }

                    jQuery('html, body').animate({
                        scrollTop: jQuery('.museum-parent').offset().top - 60
                    }, 'slow');
                }
            });
        }
    }

    //Om urlen innehåller "sok-i-databas"
    if (document.location.href.indexOf('sok-i-databas') > -1 ) {
        workingMuseums.getAll();
    }

    /*--------------------------------------
    -------------EWK-DATABASEN------------*/
    var ewk = {
        search: function(searchTerm, matchExactly) {
            var that = this;

            if (typeof(matchExactly) === 'undefined') {
                matchExactly = true;
			}

			jQuery('#ajax-loading').show();

            jQuery.ajax({
                url: ajax_object.ajaxurl,
                type: 'post',
                dataType: 'json',
                data: {
                    searchTerm: searchTerm, 
                    matchExactly: matchExactly,
                    action: 'myajax_search_ewk'
                },
                success: function(paintings) {
	            jQuery('#ajax-loading').hide();
                    that.render(paintings, searchTerm);
                    jQuery('.ewk-search').val('');
                }
            });
        },
        render: function(paintings, searchTerm) {
            var body = jQuery('.ewk-search-results');
            body.empty();
            body.append('<h1>Sökresultat</h1><h3>Sökning på: ' + searchTerm +'</h3><h3>Antal träffar: ' + paintings.length + ' st</h3>');

            jQuery.each(paintings, function(index, painting) {
                var title = painting.Titel,
                    persons = (painting.DepictedPersons != null) ? painting.DepictedPersons : 'Ingen information tillgänglig',
                    subjects = (painting.Subjects != null) ? painting.Subjects : 'Ingen information tillgänglig';
                    notes = (painting.Notes != null) ? painting.Notes : 'Ingen information tillgänglig',
                    dated = (painting.Dated != null) ? painting.Dated : 'Ingen information tillgänglig',
                    published = (painting.Published != null) ? painting.Published : 'Ingen information tillgänglig',
                    technology = (painting.Technology != null) ? painting.Technology : 'Ingen information tillgänglig';

                persons = persons.split('|');
                persons = persons.filter(function(element) { 
                              return element !== '';
                          });
                
                var allPersons = '';
                jQuery.each(persons, function(index, person) {
                    if (person != 'Ingen information tillgänglig') {
                        allPersons += '<span class="ewk-link">' + person + '</span>';
                        if (index == persons.length - 2) {
                            allPersons += ' och ';
                        } else if (index < persons.length - 1) {
                            allPersons += ', ';
                        }
                    } else {
                        allPersons += '<span>' + person + '</span>';
                    }
                });

                subjects = subjects.split('|');
                subjects = subjects.filter(function(element) { 
                              return element !== '';
                          });
                
                var allSubjects = '';
                jQuery.each(subjects, function(index, subject) {
                    if (subject != 'Ingen information tillgänglig') {
                        allSubjects += '<span class="ewk-link">' + subject + '</span>';
                        if (index == subjects.length - 2) {
                            allSubjects += ' och ';
                        } else if (index < subjects.length - 1) {
                            allSubjects += ', ';
                        }
                    } else {
                        allSubjects += '<span>' + subject + '</span>';
                    }
                });
                
                if (title == null) {
                    title = 'Ingen titel tillgänglig';
                } else {
                    title = title.trim();

                    if (title == '') {
                        title = 'Ingen titel tillgänglig';
                    }
                }

				/* EWK APP */
				if (navigator.userAgent == 'EWK ANDROID APP') {
                	body.append('<div class="fusion-separator sep-single" style="border-color:#000007;margin-top:30px;margin-bottom:30px;width:2; clear: both;"></div><div class="ewk-parent" id="' + painting['K_id_ewka'] + '"><div class="ewk-image ewk-image-iframe"><img src="/wp-content/themes/etendo/ewk/' + painting.FileName + '" title="' + painting['K_id_ewka'] + '"></div><div class="ewk-child-iframe"><h2>' + title + '</h2><div class="ewk-subjects"><span class="bold">Motiv:</span> ' + allSubjects + '</div><div class="ewk-persons"><span class="bold">Avbildade personer:</span> ' + allPersons + '</div><div class="ewk-dated"><span class="bold">Daterad:</span> ' + dated + '</div><div class="ewk-published"><span class="bold">Publicerad:</span> ' + published + '</div><div class="ewk-technology"><span class="bold">Teknik:</span> ' + technology + '</div><div class="ewk-description"><span class="bold">Noteringar:</span> ' + notes + '</div></div></div>');
				} else {
                	body.append('<div class="fusion-separator sep-single" style="border-color:#000007;margin-top:30px;margin-bottom:30px;width:2; clear: both;"></div><div class="ewk-parent" id="' + painting['K_id_ewka'] + '"><div class="ewk-image"><a href="/wp-content/themes/etendo/ewk/' + painting.FileName + '" rel="prettyPhoto[image_gallery]"><img src="/wp-content/themes/etendo/ewk/' + painting.FileName + '" title="' + painting['K_id_ewka'] + '"></a></div><div class="ewk-child"><h2>' + title + '</h2><div class="ewk-subjects"><span class="bold">Motiv:</span> ' + allSubjects + '</div><div class="ewk-persons"><span class="bold">Avbildade personer:</span> ' + allPersons + '</div><div class="ewk-dated"><span class="bold">Daterad:</span> ' + dated + '</div><div class="ewk-published"><span class="bold">Publicerad:</span> ' + published + '</div><div class="ewk-technology"><span class="bold">Teknik:</span> ' + technology + '</div><div class="ewk-description"><span class="bold">Noteringar:</span> ' + notes + '</div></div></div>');
				}
            });
        },
        randomizeCategories: function() {
            var that = this;

            jQuery.ajax({
                url: ajax_object.ajaxurl,
                type: 'post',
                dataType: 'json',
                data: {action: 'myajax_renew_ewk_categories'},
                success: function(paintings) {
                    console.log(paintings);
                    var body = jQuery('.ewk-wrapper'),
                        i = 1;
                    
                    body.empty();
                    
                    jQuery.each(paintings, function(index, painting) {
                        var subjects = painting.Subjects;

                        if (subjects) {
                            subjects = subjects.split('|');

                            subjects = subjects.filter(function(element) { 
                                          return element !== '';
                                      });
                            var subject = subjects[Math.floor(subjects.length * Math.random())];
                        }

                        if (i == 3) {
                            i = 0;
                            var isLast = 'last';
                        } else {
                            isLast = '';
                        }

                        body.append('<div class="fusion-one-third one_third fusion-column ewk-category ' + isLast + '"><div class="box" style="background-image: url(/wp-content/themes/etendo/ewk/' + painting.FileName + '); background-size: 100% 100%;"><div class="box-content third trans-gray"><h3>' + subject + '</h3></div></div></div>');
                        i++;
                    });
                }
            });
        }
    };

	if (navigator.userAgent == 'EWK ANDROID APP') {
		jQuery('.post-content .fusion-two-third a').removeAttr('href');
	}

    /*--------------------------------------
    ----------------EXHIBITS--------------*/
    var exhibits = {
        setAppCharacters: function() {
            var boxes = jQuery('.exhibit-box');

            jQuery.each(boxes, function(index, box) {
                var that = this;

                setTimeout(function() {
                    var height = jQuery(that).outerHeight(true),
                        startChars = 500;

                    var heading = jQuery(that).find('h2'),
                        headingHeight = heading.outerHeight(true);
                    
                    var ingress = jQuery(that).find('.start-ingress'),
                        ingressHeight = ingress.outerHeight(true);
                    
                    var textfield = jQuery(that).find('.exhibits-text'),
                        textValue = textfield.text(),
                        textHeight = textfield.context.lastChild.clientHeight;

                    textfield.text(textValue.substr(0, 500));
                    totalHeight = headingHeight + ingressHeight + textHeight;
                    var cut = false;

                    while (totalHeight > height) {
                        startChars -= 10;
                        textfield.text(textValue.substr(0, startChars));

                        textHeight = textfield.context.lastChild.clientHeight;
                        totalHeight = headingHeight + ingressHeight + textHeight;
                        cut = true;
                    }

                    if (cut) {
                        textfield.text(textValue.substr(0, startChars - 3));

                        textfield.text(function(index, value) {
                            return value.trim() + '...';
                        });
                    }
                }, 600);
            });
        },
        readMore: true,
        setSiteCharacters: function() {
            if (jQuery('.exhibition-text').length) {
                var textfield = jQuery('.exhibition-text'),
                    fulltext = textfield.html(),
                    textLength = 545,
                    substring = fulltext.substring(0, textLength),
                    hiddenText = jQuery('.exhibition-text-hidden'),
                    overflow = fulltext.substr(substring.length),
                    button = jQuery('.exhibition-read-more');

                hiddenText.hide();
                textfield.html(substring + '...');

                if (overflow.length == 0) {
                    button.hide();
                    textfield.html(substring);
                }
            }
        }
    };

    exhibits.setAppCharacters();
    exhibits.setSiteCharacters();

    /*--------------------------------------
    -----------------EVENTS---------------*/
    var events = {
        setAppCharacters: function() {
            var boxes = jQuery('.event-box');

            jQuery.each(boxes, function(index, box) {
                var that = this;

                setTimeout(function() {
                    var height = jQuery(that).outerHeight(true),
                        startChars = 500;

                    var heading = jQuery(that).find('h2'),
                        headingHeight = heading.outerHeight(true);
                    
                    var ingress = jQuery(that).find('.start-ingress'),
                        ingressHeight = ingress.outerHeight(true);
                    
                    var textfield = jQuery(that).find('.events-text'),
                        textValue = textfield.text(),
                        textHeight = textfield.context.lastChild.clientHeight;

                    textfield.text(textValue.substr(0, 500));
                    totalHeight = headingHeight + ingressHeight + textHeight;
                    var cut = false;

                    while (totalHeight > height) {
                        startChars -= 10;
                        textfield.text(textValue.substr(0, startChars));

                        textHeight = textfield.context.lastChild.clientHeight;
                        totalHeight = headingHeight + ingressHeight + textHeight;
                        cut = true;
                    }

                    if (cut) {
                        textfield.text(textValue.substr(0, startChars - 3));
                        textfield.text(function(index, value) {
                            return value.trim() + '...';
                        });
                    }
                }, 600);
            });
        },
        readMore: true,
        setSiteCharacters: function() {
            var textfield = jQuery('.event-text'),
                fulltext = textfield.html(),
                textLength = 545,
                substring = fulltext.substring(0, textLength),
                hiddenText = jQuery('.event-text-hidden'),
                overflow = fulltext.substr(substring.length),
                button = jQuery('.event-read-more');

            hiddenText.hide();
            textfield.html(substring + '...');

            if (overflow.length == 0) {
                button.hide();
                textfield.html(substring);
            }
        }
    };

    events.setAppCharacters();

    if (document.location.href.indexOf('/evenemanget') > -1 ) {
        events.setSiteCharacters();
    }

    /*--------------------------------------
    ---------------COMING-UP--------------*/
    var comingUp = {
        setAppCharacters: function() {
            var boxes = jQuery('.coming-up-box');

            jQuery.each(boxes, function(index, box) {
                var that = this;

                setTimeout(function() {
                    var height = jQuery(that).outerHeight(true),
                        startChars = 500;

                    var heading = jQuery(that).find('h2'),
                        headingHeight = heading.outerHeight(true);
                    
                    var ingress = jQuery(that).find('.start-ingress'),
                        ingressHeight = ingress.outerHeight(true);
                    
                    var textfield = jQuery(that).find('.coming-up-text'),
                        textValue = textfield.text(),
                        textHeight = textfield.context.lastChild.clientHeight;

                    textfield.text(textValue.substr(0, 500));
                    totalHeight = headingHeight + ingressHeight + textHeight;
                    var cut = false;

                    while (totalHeight > height) {
                        startChars -= 10;
                        textfield.text(textValue.substr(0, startChars));

                        textHeight = textfield.context.lastChild.clientHeight;
                        totalHeight = headingHeight + ingressHeight + textHeight;
                        cut = true;
                    }

                    if (cut) {
                        textfield.text(textValue.substr(0, startChars - 3));
                        textfield.text(function(index, value) {
                            return value.trim() + '...';
                        });
                    }
                }, 600);
            });
        }
    };

    comingUp.setAppCharacters();

    /*--------------------------------------
    --------------RECENT-POST-------------*/
    var recentPost = {
        setAppCharacters: function() {
            var boxes = jQuery('.recent-post-box');

            jQuery.each(boxes, function(index, box) {
                var that = this;

                setTimeout(function() {
                    var height = jQuery(that).outerHeight(true),
                        startChars = 500;

                    var heading = jQuery(that).find('h2'),
                        headingHeight = heading.outerHeight(true);
                    
                    var ingress = jQuery(that).find('.start-ingress'),
                        ingressHeight = ingress.outerHeight(true);
                    
                    var textfield = jQuery(that).find('.recent-post-text'),
                        textValue = textfield.text(),
                        textHeight = textfield.context.lastChild.clientHeight;

                    textfield.text(textValue.substr(0, 500));
                    totalHeight = headingHeight + ingressHeight + textHeight;
                    var cut = false;

                    while (totalHeight > height) {
                        startChars -= 15;
                        textfield.text(textValue.substr(0, startChars));

                        textHeight = textfield.context.lastChild.clientHeight;
                        totalHeight = headingHeight + ingressHeight + textHeight;
                        cut = true;
                    }

                    if (cut) {
                        textfield.text(textValue.substr(0, startChars - 3));

                        textfield.text(function(index, value) {
                            return value.trim() + '...';
                        });
                    }
                }, 600);
            });
        }
    };

    recentPost.setAppCharacters();

    /*--------------------------------------
    ----------------FACEBOOK--------------*/
    /*var facebook = {
        changeImage: function() {
            var button = jQuery('.pluginShareButtonLink');
            var image = jQuery('.pluginShareButtonLink img');

            console.log(button);
            console.log(image);

            console.log(image.attr('src'));
        }
    };

    facebook.changeImage();*/

    /*--------------------------------------
    -----------------FORMS----------------*/
    var request = {
        init: function() {
            var that = this;
            this.group = jQuery('select[name="input_1"]'),
            this.exhibition = jQuery('select[name="input_3"]'),
            this.concept = jQuery('select[name="input_4"]');

            this.exhibition.prop('disabled', true);
            this.concept.prop('disabled', true);

            this.exhibitionValue = this.exhibition.val();
            this.conceptValue = this.concept.val();
            this.getExhibitions();
            this.getConcepts();

            this.group.on('change', function() {
                this.exhibitionValue = '';
                this.conceptValue = '';
                that.getExhibitions();
            });

            if (this.group.val() != '')
                this.exhibition.prop('disabled', false);

            if (this.exhibition.val() != 'Välj utställning...' && this.exhibition.val() != '') {
                this.concept.prop('disabled', false);
            }
        },
        getExhibitions: function() {
            var that = this;
            this.groupValue = this.group.val();
            this.exhibition.find('option').remove().end();

            this.concept.find('option').remove().end();
            this.concept.prop('disabled', true);
            this.concept.append('<option value="">Välj koncept...</option>');

            this.exhibition.on('change', function() {
                that.conceptValue = '';
                that.getConcepts();
            });

            if (this.groupValue != '') {
                this.exhibition.prop('disabled', false);

                if (this.groupValue == 'Förskola/skola') {
                    var showExhibitions = ['Välj utställning...', 'Huset', 'Historien om Alva', 'Bild=makt?!', 'EWK-museet', 'Allas lika värde', 'Framtidsland', 'Framtidsland - yrkesval och framtidskval', 'Kris & vision', 'Face the facts', 'Bli ett energigeni'];

                    for (var i = 0; i < showExhibitions.length; i++) {
                        var isSelected = (this.exhibitionValue == showExhibitions[i]) ? ' selected' : '';
                        this.exhibition.append('<option value="' + showExhibitions[i] + '"' + isSelected + '>' + showExhibitions[i] + '</option>');
                    }
                } else if (this.groupValue == 'Vuxenutbildning') {
                    var showExhibitions = ['Välj utställning...', 'Huset', 'Historien om Alva', 'Bild=makt?!', 'EWK-museet', 'Allas lika värde', 'Framtidsland', 'Framtidsland - yrkesval och framtidskval', 'Kris & vision', 'Face the facts'];

                    for (var i = 0; i < showExhibitions.length; i++) {
                        var isSelected = (this.exhibitionValue == showExhibitions[i]) ? ' selected' : '';
                        this.exhibition.append('<option value="' + showExhibitions[i] + '"' + isSelected +'>' + showExhibitions[i] + '</option>');
                    }
                } else if (this.groupValue == 'Seniorgrupp') {
                    var showExhibitions = ['Välj utställning...', 'Huset', 'EWK-museet', 'Framtidsland', 'Kris & vision', 'Face the facts'];

                    for (var i = 0; i < showExhibitions.length; i++) {
                        var isSelected = (this.exhibitionValue == showExhibitions[i]) ? ' selected' : '';
                        this.exhibition.append('<option value="' + showExhibitions[i] + '"' + isSelected + '>' + showExhibitions[i] + '</option>');
                    }
                } else if (this.groupValue == 'Övriga grupper') {
                    var showExhibitions = ['Välj utställning...', 'Huset', 'Historien om Alva', 'EWK-museet', 'Kris & vision', 'Framtidsland', 'Intro 100! + Framtidsland', 'Face the facts'];

                    for (var i = 0; i < showExhibitions.length; i++) {
                        var isSelected = (this.exhibitionValue == showExhibitions[i]) ? ' selected' : '';
                        this.exhibition.append('<option value="' + showExhibitions[i] + '"' + isSelected + '>' + showExhibitions[i] + '</option>');
                    }
                }
            } else {
                this.exhibition.prop('disabled', true);
                this.exhibition.append('<option value="">Välj utställning...</option>');
            } 
        },
        getConcepts: function() {
            this.concept.find('option').remove().end();
            this.exhibitionValue = this.exhibition.val();
            
            if (this.exhibitionValue != 'Välj utställning...' && this.exhibitionValue != '') {
                this.concept.prop('disabled', false);
                
                if (this.groupValue == 'Förskola/skola') {
                    if (this.exhibitionValue == 'Huset') {
                        var showConcepts = ['Välj koncept...', 'Visning 60 minuter (500 kr)', 'Besök på egen hand (Gratis)'];
                        this.populateConcept(showConcepts);
                    } else if (this.exhibitionValue == 'Historien om Alva') {
                        var showConcepts = ['Välj koncept...', 'Dramatiserad visning 30 minuter (500 kr)', 'Visning 45 minuter (750 kr)', 'Besök på egen hand (Gratis)'];
                        this.populateConcept(showConcepts);
                    } else if (this.exhibitionValue == 'EWK-museet') {
                        var showConcepts = ['Välj koncept...', 'Besök på egen hand (Gratis)'];
                        this.populateConcept(showConcepts);
                    } else if (this.exhibitionValue == 'Bild=makt?!') {
                        var showConcepts = ['Välj koncept...', 'Visning 60 minuter (500 kr)'];
                        this.populateConcept(showConcepts);
                    } else if (this.exhibitionValue == 'Allas lika värde') {
                        var showConcepts = ['Välj koncept...', 'Workshop 90 minuter (750 kr)'];
                        this.populateConcept(showConcepts);
                    } else if (this.exhibitionValue == 'Framtidsland') {
                        var showConcepts = ['Välj koncept...', 'Visning 60 minuter (500 kr)', 'Besök på egen hand (Gratis)'];
                        this.populateConcept(showConcepts);
                    } else if (this.exhibitionValue == 'Framtidsland - yrkesval och framtidskval') {
                        var showConcepts = ['Välj koncept...', 'Workshop 90 minuter (750 kr)'];
                        this.populateConcept(showConcepts);
                    } else if (this.exhibitionValue == 'Kris & vision') {
                        var showConcepts = ['Välj koncept...', 'Visning 45 minuter (500 kr)', 'Besök på egen hand (Gratis)'];
                        this.populateConcept(showConcepts);
                    } else if (this.exhibitionValue == 'Face the facts') {
                        var showConcepts = ['Välj koncept...', 'Visning 60 minuter (500 kr)', 'Workshop 90 minuter (750 kr)', 'Besök på egen hand (Gratis)'];
                        this.populateConcept(showConcepts);
                    } else if (this.exhibitionValue == 'Bli ett energigeni') {
                        var showConcepts = ['Välj koncept...', 'Med värd 60 minuter (Gratis. I mån av plats.)', 'Besök på egen hand (Gratis)'];
                        this.populateConcept(showConcepts);
                    }
                } else if (this.groupValue == 'Vuxenutbildning') {
                    if (this.exhibitionValue == 'Huset') {
                        var showConcepts = ['Välj koncept...', 'Introduktion 15 minuter (600 kr)', 'Visning 60 minuter (750 kr)', 'Besök på egen hand (Gratis)'];
                        this.populateConcept(showConcepts);
                    } else if (this.exhibitionValue == 'Historien om Alva') {
                        var showConcepts = ['Välj koncept...', 'Introduktion 15 minuter (600 kr)', 'Visning 45 minuter (750 kr)', 'Dramatiserad visning 30 minuter (1000 kr)', 'Besök på egen hand (Gratis)'];
                        this.populateConcept(showConcepts);
                    } else if (this.exhibitionValue == 'EWK-museet') {
                        var showConcepts = ['Välj koncept...', 'Introduktion 15 minuter (600 kr)', 'Besök på egen hand (Gratis)'];
                        this.populateConcept(showConcepts);
                    } else if (this.exhibitionValue == 'Bild=makt?!') {
                        var showConcepts = ['Välj koncept...', 'Visning 60 minuter (750 kr)'];
                        this.populateConcept(showConcepts);
                    } else if (this.exhibitionValue == 'Allas lika värde') {
                        var showConcepts = ['Välj koncept...', 'Workshop 90 minuter (750 kr)'];
                        this.populateConcept(showConcepts);
                    } else if (this.exhibitionValue == 'Framtidsland') {
                        var showConcepts = ['Välj koncept...', 'Introduktion 15 minuter (600 kr)', 'Visning 60 minuter (750 kr)', 'Besök på egen hand (Gratis)'];
                        this.populateConcept(showConcepts);
                    } else if (this.exhibitionValue == 'Framtidsland - yrkesval och framtidskval') {
                        var showConcepts = ['Välj koncept...', 'Workshop 90 minuter (1000 kr)'];
                        this.populateConcept(showConcepts);
                    } else if (this.exhibitionValue == 'Kris & vision') {
                        var showConcepts = ['Välj koncept...', 'Introduktion 15 minuter (600 kr)', 'Visning 45 minuter (750 kr)', 'Besök på egen hand (Gratis)'];
                        this.populateConcept(showConcepts);
                    } else if (this.exhibitionValue == 'Face the facts') {
                        var showConcepts = ['Välj koncept...', 'Introduktion 15 minuter (600 kr)', 'Visning 60 minuter (750 kr)', 'Workshop 90 minuter (1000 kr)', 'Besök på egen hand (Gratis)'];
                        this.populateConcept(showConcepts);
                    } 
                } else if (this.groupValue == 'Seniorgrupp') {
                    if (this.exhibitionValue == 'Huset') {
                        var showConcepts = ['Välj koncept...', 'Introduktion 15 minuter (600 kr)', 'Visning 60 minuter (750 kr)', 'Besök på egen hand (Gratis)'];
                        this.populateConcept(showConcepts);
                    } else if (this.exhibitionValue == 'EWK-museet') {
                        var showConcepts = ['Välj koncept...', 'Introduktion 15 minuter (600 kr)', 'Visning 45 minuter (750 kr)', 'Besök på egen hand (Gratis)'];
                        this.populateConcept(showConcepts);
                    } else if (this.exhibitionValue == 'Kris & vision') {
                        var showConcepts = ['Välj koncept...', 'Introduktion 15 minuter (600 kr)', 'Visning 45 minuter (750 kr)', 'Besök på egen hand (Gratis)'];
                        this.populateConcept(showConcepts);
                    } else if (this.exhibitionValue == 'Framtidsland') {
                        var showConcepts = ['Välj koncept...', 'Introduktion 15 minuter (600 kr)', 'Visning 60 minuter (750 kr)', 'Besök på egen hand (Gratis)'];
                        this.populateConcept(showConcepts);
                    } else if (this.exhibitionValue == 'Intro 100! + Framtidsland') {
                        var showConcepts = ['Välj koncept...', 'Visning 60 minuter (750 kr)'];
                        this.populateConcept(showConcepts);
                    }  else if (this.exhibitionValue == 'Face the facts') {
                        var showConcepts = ['Välj koncept...', 'Introduktion 15 minuter (600 kr)', 'Visning 60 minuter (750 kr)', 'Workshop 90 minuter (1000 kr)', 'Besök på egen hand (Gratis)'];
                        this.populateConcept(showConcepts);
                    } 
                } else if (this.groupValue == 'Övriga grupper') {
                    if (this.exhibitionValue == 'Huset') {
                        var showConcepts = ['Välj koncept...', 'Introduktion 15 minuter (600 kr)', 'Visning 60 minuter (1350 kr)', 'Besök på egen hand (Gratis)'];
                        this.populateConcept(showConcepts);
                    } else if (this.exhibitionValue == 'Historien om Alva') {
                        var showConcepts = ['Välj koncept...', 'Introduktion 15 minuter (600 kr)', 'Visning 45 minuter (1350 kr)', 'Dramatiserad visning 30 minuter (2500 kr)', 'Besök på egen hand (Gratis)'];
                        this.populateConcept(showConcepts);
                    } else if (this.exhibitionValue == 'EWK-museet') {
                        var showConcepts = ['Välj koncept...', 'Introduktion 15 minuter (600 kr)', 'Visning 45 minuter (1350 kr)', 'Besök på egen hand (Gratis)'];
                        this.populateConcept(showConcepts);
                    } else if (this.exhibitionValue == 'Kris & vision') {
                        var showConcepts = ['Välj koncept...', 'Introduktion 15 minuter (600 kr)', 'Visning 45 minuter (1350 kr)', 'Besök på egen hand (Gratis)'];
                        this.populateConcept(showConcepts);
                    } else if (this.exhibitionValue == 'Framtidsland') {
                        var showConcepts = ['Välj koncept...', 'Introduktion 15 minuter (600 kr)', 'Visning 60 minuter (1350 kr)', 'Besök på egen hand (Gratis)'];
                        this.populateConcept(showConcepts);
                    } else if (this.exhibitionValue == 'Intro 100! + Framtidsland') {
                        var showConcepts = ['Välj koncept...', 'Visning 60 minuter (1350 kr)'];
                        this.populateConcept(showConcepts);
                    }  else if (this.exhibitionValue == 'Face the facts') {
                        var showConcepts = ['Välj koncept...', 'Introduktion 15 minuter (600 kr)', 'Visning 60 minuter (1350 kr)', 'Workshop 90 minuter (2500 kr)', 'Besök på egen hand (Gratis)'];
                        this.populateConcept(showConcepts);
                    } 
                }
                this.exhibitionValue = '';
            } else {
                this.concept.prop('disabled', true);
                this.concept.append('<option value="Välj koncept...">Välj koncept...</option>');
            }
        },
        populateConcept: function(showConcepts) {
            for (var i = 0; i < showConcepts.length; i++) {
                var isSelected = (this.conceptValue == showConcepts[i]) ? ' selected' : '';
                this.concept.append('<option value="' + showConcepts[i] + '"' + isSelected + '>' + showConcepts[i] + '</option>');
            }
        }
    };

    request.init();

    /*--------------------------------------
    --------------EVENT-LISTENERS---------*/
    jQuery(document).on('click', '.data-href', function() {
        var url = jQuery(this).attr('data-href');
        window.location.href = url;
    });

    jQuery('.museum-search-form').submit(function(event) {
        var searchTerm = jQuery('.museum-search').val();
        workingMuseums.search(searchTerm);

        event.preventDefault();
        event.stopImmediatePropagation();
    });

    jQuery(document).on('click', '.heading', function(event) {
        var heading = jQuery(this);
        heading.toggleClass('museum-parent-yellow');
        
        var sibling = heading.next();
        sibling.slideToggle();

        workingMuseums.showMiniMap(heading);
    });

    jQuery(document).on('click', '.museum-map-parent', function() {
        var museum_id = this.id;
        workingMuseums.get(museum_id);
    });

    jQuery('.ewk-search-form').submit(function(event) {
        var searchTerm = jQuery('.ewk-search').val(),
            matchExactly = jQuery('.match-exactly').is(':checked');

        ewk.search(searchTerm, matchExactly);

        event.preventDefault();
        event.stopImmediatePropagation();
    });

    jQuery(document).on('click', '.ewk-category', function() {
        var searchTerm = jQuery(this).find('h3').text();
        ewk.search(searchTerm);

        jQuery('html, body').animate({
            scrollTop: jQuery('.ewk-search-results').offset().top - 60
        }, 'slow');
		if ('parentIFrame' in window) {
		    window.parentIFrame.scrollTo(0, jQuery('.ewk-search-results').offset().top - 60);
		}
    });

    jQuery(document).on('click', '.ewk-link', function() {
        var searchTerm = jQuery(this).text();
        ewk.search(searchTerm);

        jQuery('html, body').animate({
            scrollTop: jQuery('.ewk-search-results').offset().top - 60
        }, 'slow');
		if ('parentIFrame' in window) {
		    window.parentIFrame.scrollTo(0, jQuery('.ewk-search-results').offset().top - 60);
		}
    });

    jQuery(document).on('click', '.ewk-renew-categories', function() {
        ewk.randomizeCategories();
    });

    jQuery('.exhibition-read-more').click(function() {
        var fulltext = jQuery('.exhibition-text-hidden'),
            substring = jQuery('.exhibition-text'),
            button = jQuery('.exhibition-read-more');

        fulltext.toggle();
        substring.toggle();

        if (exhibits.readMore) {
            button.text('Visa mindre');
            exhibits.readMore = false;
        } else {
            button.text('Läs mer');
            exhibits.readMore = true;
        }
    });

    jQuery('.event-read-more').click(function() {
        var fulltext = jQuery('.event-text-hidden'),
            substring = jQuery('.event-text'),
            button = jQuery('.event-read-more');

        fulltext.toggle();
        substring.toggle();

        if (events.readMore) {
            button.text('Visa mindre');
            events.readMore = false;
        } else {
            button.text('Läs mer');
            events.readMore = true;
        }
    });

    //Om urlen innehåller "veckans_tips"
    if (document.location.href.indexOf('/?veckans_tips=') > -1 ) {
        var url = document.location.href,
            start = url.indexOf('/?veckans_tips='),
            id = url.substr(start),
            start = id.indexOf('='),
            id = id.substr(start + 1);

        workingMuseums.get(id);
    }

    jQuery('.press-menu a, .press-submenu a').click(function() {
        var that = this;

		if (!jQuery(this).parent().parent().hasClass('press-submenu')) {
			jQuery('.press-menu a, .press-submenu a').removeClass('active');
		}
		jQuery(this).addClass('active');
		
		jQuery.ajax({
			url: ajax_object.ajaxurl,
			type: 'post',
			dataType: 'html',
			data: {
		   		category_id: jQuery(this).attr('data-category-id'), 
		   		action: 'ajax_get_press_photos'
			},
			success: function(result) {
				jQuery('.press-submenu li').hide();
				if (jQuery(that).parent().parent().hasClass('press-menu')) {
					jQuery('.press-submenu li a[data-parent="' + jQuery(that).attr('data-category-id')+ '"]').parent().show();
				} else {
					jQuery('.press-submenu li a[data-parent="' + jQuery(that).attr('data-parent')+ '"]').parent().show();				
				}
				jQuery('#press-photos').html(result);
			}
		});		
		return false;
    });
});
