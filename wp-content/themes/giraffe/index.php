<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package giraffe
 */

get_header();
?>

<div class="loader" style="width: 100vw; height: 100vh; position: fixed; background-color: white; z-index: 500; display: none;">
        <div id="loader-logo"></div>
        <p>Загружаем...</p>
    </div>
    <header>
        <img class="logo" src="<?php echo get_template_directory_uri() . '/img/logo.png' ?>" alt="logo">
    </header>
    <nav>
        <a class="" href="#breakfasts">Завтраки</a>
        <a href="#salads">Салаты</a>
        <a href="#main-dishes">Первые<br>блюда</a>
        <a href="#second-dishes">Вторые<br>блюда</a>
        <a href="#pizza">Пицца</a>
        <a href="#burgers">Бургеры</a>
        <a href="#snacks">Закуски</a>
    </nav>

    <div class="preCheckBg" style="display: none;">
        <div class="preCheck">
            <div class="preCheckInfo">
                <h3>Желаемый заказ</h3>
                <p>Предварительная сумма:   <span id="sum">0</span> </p>
                <p>Обслуживание 15%</p>
            </div>
            <i class="fas fa-chevron-circle-left" ></i>
            <div class="gridCheck">
            </div>
        </div>
    </div>
    <main>
        <div id="basketForCheck">
            <div id="positionCounter">0</div>
            <i class='bx bxs-dish'></i>
        </div>
        
        <section id='breakfasts' class="section" >
            <h2>Завтраки</h2>
        </section>
        <section id="salads" class="section">
            <h2>Салаты</h2>
        </section>
        <section id="main-dishes"  class="section">
            <h2>Первые блюда</h2>
        </section>
        <section id="second-dishes"  class="section">
            <h2>Вторые блюда</h2>
        </section>
        <section id="pizza"  class="section"></section>
        <section id="burders"  class="section"></section>
        <section id="snacks"  class="section"></section>
    </main>     
</div>
<div class="help-option">
    <i class="fas fa-info-circle"></i>
    <div class="priceInfo">
        <p>Нажмите на цену, а затем на всплывающую иконку, чтобы добавить блюдо в список желаемого заказа.</p>
        <i class="fas fa-times"></i>
    </div>
</div>
<?php get_footer(); ?>
