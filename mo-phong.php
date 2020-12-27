<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>
            JP Impact
        </title>
        <link rel="icon" href="img/logo-dark.png">
        <meta content="" name="description">
        <meta content="" name="author">
        <meta content="" name="keywords">
        <meta property="og:image" content="http://ps-i.vn/img/logo-dark.png" />
        <meta property="og:image:alt" content="JP Impact" />
        <meta property="og:title" content="JP Impact" />
        <meta property="og:type" content="service" />
        <meta property="og:url" content="http://ps-i.vn" />
        <meta property="og:description" content="Với tâm nguyện mang lại giá trị cho khách hàng cho xã hội, cho đất nước. Chúng tôi là cầu nối giữa kinh tế văn hoá của hai nước Việt Nam - Nhật Bản" />
        <meta content="height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport">
        <!-- Legendo v1.2 || ex nihilo || May - June 2018 -->
        <!-- style start -->
        <!-- style end -->
        <!-- google fonts start -->
        <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
        <link href="css/styleSlide.css" media="all" rel="stylesheet" type="text/css">
        <link href="css/plugins.css" media="all" rel="stylesheet" type="text/css">
        <link href="css/style.css" media="all" rel="stylesheet" type="text/css"><!-- style end -->
        <link rel="stylesheet" href="css/normalize.min.css">
        <link rel="stylesheet" href="css/jquery-ui.min.css">
        <link rel="stylesheet" href="css/slick.css">
        <!-- <link rel="stylesheet" href="css/jquery.fancybox.css"> -->
        <!-- google fonts start -->
        <link href="http://fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,600,700,800,900%7CMontserrat:400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" type=
                "text/css"><!-- google fonts end -->
        <link rel="stylesheet" href="css/jquery.popVideo.css">
    </head>
    <body>
        <!-- preloader start -->
       <div class="preloader-bg"></div>
        <div id="preloader">
            <div id="preloader-status">
                <div class="preloader-position loader">
                    <span></span>
                </div>
            </div>
        </div> 
        <!-- borders start -->
        <!--<div class="border-top top-position"></div>
        <div class="border-left left-position"></div>
        <div class="border-right right-position"></div>
        <div class="border-bottom bottom-position"></div>-->
        <div class="social-icons-wrapper-share bottom-position">
            <div class="social-toggle-wrap">
                <div class="social-toggle">
                    <i class="ion-share"></i>
                </div>
                <div class="social-widgets-wrap">
                    <div class="social-widgets">
                        <ul>
                            <li class="social-icon">
                                <a class="ion-social-twitter" href="#"></a>
                            </li>
                            <li class="social-icon">
                                <a class="ion-social-facebook" href="#"></a>
                            </li>
                            <li class="social-icon">
                                <a class="ion-social-googleplus" href="#"></a>
                            </li>
                            <li class="social-icon">
                                <a class="ion-social-youtube" href="#"></a>
                            </li>
                            <li class="social-icon">
                                <a class="ion-social-linkedin" href="#"></a>
                            </li>
                            <li class="social-icon">
                                <a class="ion-social-instagram" href="#"></a>
                            </li>
                            <li class="social-icon">
                                <a class="ion-social-pinterest" href="#"></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- home start -->
        <!-- this is slide on homepage -->
        <div id="home">
            <section id="services">
                <!-- container start -->
                <div id ="page-title-top1" class="container sections" >
                    <!-- services columns start -->
                    <div class="services-columns">
                        <?php
                        $dir = "";
                        for ($x = 1; $x <= 4; $x++) {
                            $img =[];
                        ?>
                        <div class="dividerOT out-bottom"></div><!-- divider end -->
                        <div class="row">
                            <!-- col start -->
                            <div class="col-lg-12 services-padding services-padding-secondary border-left-services mb40">
                                <h2 class="section-subheading">
                                    <span>
                                        <?php
                                        switch ($x){
                                            case 1:
                                                $dir = "/img/mo-phong/giay-hd";
                                                echo "bìa giấy hiện đại";break;
                                            case 2:
                                                $dir = "/img/mo-phong/mau-hd";
                                                echo "bìa màu hiện đại";break;
                                            case 3:
                                                $dir = "/img/mo-phong/giay-tt";
                                                echo "bìa giấy truyền thống";break;
                                            case 4:
                                                $dir = "/img/mo-phong/mau-tt";
                                                echo "bìa màu truyền thống";break;
                                        }
                                        $img = scandir(getcwd().$dir);
                                        $img = array_diff($img, array('..', '.'));
                                        ?>
                                    </span>
                                </h2>
                            </div><!-- col end -->
                        </div><!-- row end -->
                        <!-- divider start -->
                        <div class="dividerOT out-bottom" style="height: 50px"></div><!-- divider end -->
                        <!-- row start  ảnh mô phỏng-->
                            <?php
                                $n = count($img)%6==0 ? count($img)/6 : count($img)/6+1;
                                $n = floor($n);
                                $dem = 2;
                                for ($i = 1; $i <= $n; $i++) {
                                    ?>
                                    <div class="row">
                                        <!-- col start -->
                                        <?php
                                            for($j = 1; $j <= 6; $j++){
                                                if ($dem>count($img)) break;
                                        ?>
                                                <div class="col-xs-2 services-padding-primary mb40">
                                                    <div class="img-fullwidth img-fullwidth-all">
                                                        <img src="<?php echo $dir."/".$img[$dem];?>" height="200px"/>
                                                    </div>
                                                </div><!-- col end -->
                                        <?php
                                                $dem ++;
                                            }
                                        ?>
                                    </div><!-- row end -->
                                    <div class="dividerOT out-bottom" style="height: 50px"></div>
                                    <?php
                                }
                        }
                        ?>
                    </div><!-- services columns end -->
                </div><!-- container end -->
                <!-- divider start -->
                <div class="dividerOT out-bottom"></div><!-- divider end -->
            </section><!-- services end -->
        </div>
        <!-- photoSwipe background start -->
        <div aria-hidden="true" class="pswp" role="dialog" tabindex="-1">
            <div class="pswp__bg"></div>
            <div class="pswp__scroll-wrap">
                <div class="pswp__container">
                    <div class="pswp__item"></div>
                    <div class="pswp__item"></div>
                    <div class="pswp__item"></div>
                </div>
                <div class="pswp__ui pswp__ui--hidden">
                    <div class="pswp__top-bar">
                        <div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button> <button class="pswp__button pswp__button--share" title=
                        "Share"></button> <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button> <button class="pswp__button pswp__button--zoom" title=
                        "Zoom in/out"></button>
                        <div class="pswp__preloader">
                            <div class="pswp__preloader__icn">
                                <div class="pswp__preloader__cut">
                                    <div class="pswp__preloader__donut"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                        <div class="pswp__share-tooltip"></div>
                    </div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button> <button class="pswp__button pswp__button--arrow--right" title=
                    "Next (arrow right)"></button>
                    <div class="pswp__caption">
                        <div class="pswp__caption__center"></div>
                    </div>
                </div>
            </div>
        </div><!-- photoSwipe background end -->
        <!-- to top arrow start -->
        <a class="page-scroll" href="#home-main-img">
            <div class="to-top-arrow">
                <span class="ion-ios-arrow-up"></span>
            </div></a><!-- to top arrow end -->

        <!-- scripts start -->
        <script src="js/jquery.popVideo.js"></script>
        <script src="js/plugins.js">
        </script>
        <!-- <script type="text/javascript" src="js/plugins-uncompressed.js"></script> -->
        <script src="js/legendo.js">
        </script>
    </body>
</html>