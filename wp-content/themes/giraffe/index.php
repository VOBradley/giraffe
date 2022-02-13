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
    <nav>
        <?php
            $categories = get_categories(array(
                'orderby' => 'name',
                'order' => 'ASC'
            ));
            foreach( $categories as $category ){
                echo '<a href="#' . $category->slug . '" title="' . $category->slug . '" ' . '>' . $category->name.'</a>';
            }
        ?>
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
        <?php
$categories = get_categories(array(
	'orderby' => 'name',
	'order' => 'ASC',
));

foreach( $categories as $category ){
    echo '<section id="' . $category->slug . '" class="section" >';
	echo "<h2>" . $category->name . "</h2>";
    $catID = array(
        'cat' => $category->term_id
    );
    if ( have_posts() ) : // если имеются записи в блоге.
        query_posts($catID);   // указываем ID рубрик, которые необходимо вывести.
        while (have_posts()) : the_post();  // запускаем цикл обхода материалов блога
        ?>
        <div class="gridBlock">
         <p class="price"><?php the_field('positionPrice') ?></p>
            <i class="bx bx-dish"></i>
            <div class="position-name">
                <p class="tooMuch"><?php echo the_field('positionName') ?></p>
            </div>
            <div class="block-bg"></div>
        <img class="menu-image" src="<?php echo the_post_thumbnail( 'medium' ); ?>">
        </div>
        <?php
        endwhile;  // завершаем цикл.
        endif;
        /* Сбрасываем настройки цикла. Если ниже по коду будет идти еще один цикл, чтобы не было сбоя. */
        wp_reset_query();
    echo "</section>";
}
?>
        <section id='breakfasts' class="section" >
            <h2>Завтраки</h2>
            
            <?php
                                   
            ?>
            
            </div>
        </section>
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
