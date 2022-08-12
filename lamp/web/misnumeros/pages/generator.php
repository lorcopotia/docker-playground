<?php
	require 'conn.php';

    $duos = $db->query('SELECT L1, L2, COUNT(*) cnt FROM euro_table GROUP BY L1, L2 ORDER BY cnt DESC LIMIT 6');

    $numbers = array(
        "1er número" => $db->query('SELECT N1,COUNT(*) as ocur FROM euro_table GROUP BY N1 ORDER BY ocur DESC LIMIT 10'),
        "2do número" => $db->query('SELECT N2,COUNT(*) as ocur FROM euro_table GROUP BY N2 ORDER BY ocur DESC LIMIT 10'),
        "3er número" => $db->query('SELECT N3,COUNT(*) as ocur FROM euro_table GROUP BY N3 ORDER BY ocur DESC LIMIT 10'),
        "4to número" => $db->query('SELECT N4,COUNT(*) as ocur FROM euro_table GROUP BY N4 ORDER BY ocur DESC LIMIT 10'),
        "5to número" => $db->query('SELECT N5,COUNT(*) as ocur FROM euro_table GROUP BY N5 ORDER BY ocur DESC LIMIT 10'),
    );

    $stars = array(
        "1ra estrella" => $db->query('SELECT L1,COUNT(*) as ocur FROM euro_table GROUP BY L1 ORDER BY ocur DESC LIMIT 8'),
        "2da estrella" => $db->query('SELECT L2,COUNT(*) as ocur FROM euro_table GROUP BY L2 ORDER BY ocur DESC LIMIT 8')
    );

?>

<div class="d-flex flex-column-fluid" >    
    <div class="container">
        <p class="p-2 lead text-center"><strong>Para obtener un número de Euromillones diferente refresque la página.</strong> Los números son generados aleatoriamente entre los números que más salen por cada posición.</p>
        <div class="card card-custom gutter-b">
            <div class="p-6 row justify-content-center">
                <?php 
                $narchive = array();
                foreach($numbers as $k => $v) {

                    echo "<div class=\"col col-sm-auto\">";
                    echo "<table class=\"table table-striped table-hover\">";
                    echo "<thead><tr><th scope=\"col\" colspan=\"2\"><strong>".$k."</strong></th></tr>";
                    echo "<tr><th scope=\"col\">#</th><th scope=\"col\">Ocurrencias</th>";
                    echo "</tr></thead>";

                    while ($nrow = $v->fetchArray()) {
                        echo "<tr><td><strong>".$nrow[0]."</strong></td><td class=\"table-active\">".$nrow[1]."</td></tr>";
                        // Adding top numbers to archive array in order to be used later as a source and checking that arent already in
                        if (!in_array($nrow[0], $narchive, true)) {
                            array_push($narchive, $nrow[0]); 
                        }
                    }
                    // closing table
                    echo "</table></div>";
                    
                }

                $sarchive = array();
                foreach($stars as $a => $b) {

                    echo "<div class=\"col col-sm-auto\">";
                    echo "<table class=\"table table-striped table-hover\">";
                    echo "<thead><tr><th scope=\"col\" colspan=\"2\"><strong>".$a."</strong></th></tr>";
                    echo "<tr><th scope=\"col\">#</th><th scope=\"col\">Ocurrencias</th>";
                    echo "</tr></thead>";

                    while ($srow = $b->fetchArray()) {
                        echo "<tr><td><strong>".$srow[0]."</strong></td><td class=\"table-active\">".$srow[1]."</td></tr>";
                        // Adding top numbers to archive array in order to be used later as a source and checking that arent already in
                        if (!in_array($srow[0], $sarchive, true)) {
                            array_push($sarchive, $srow[0]); 
                        }
                    }
                    // closing table
                    echo "</table></div>";
                    
                }
                ?>
            </div>
        </div>
        <div class="m-0 row card-group">
                <?php
                $nout = array_unique($narchive);
                sort($nout);
                $sout = array_unique($sarchive);
                sort($sout);

                // Getting 5 random keys and then sort them out asc
                $rand_num = array_rand($nout, 5);
                sort($rand_num);

                // print_r($rand_num);

                // Getting 2 random keys and then sort them out asc
                $rand_stars = array_rand($sout, 2);
                sort($rand_stars);
                array_filter($rand_stars);

                foreach($rand_num as $nids){
                    echo "<div class=\"card \"><div class=\" card-body\">";
                    echo "<div class=\"container btn btn-primary disabled text-center\"><h1 class=\"display-4\">";
                    
                    print_r($nout[$nids]);

                    echo "</h1></div></div></div>";
                }

                foreach($rand_stars as $sids){
                    echo "<div class=\"card  \"><div class=\" card-body\">";
                    echo "<div class=\"container btn btn-primary disabled text-center\"><h1 class=\"display-4\">";

                    print_r($sout[$sids]);

                    echo "</h1></div></div></div>";
                }

                // print_r($nout);
                
                ?>
        </div>
    </div>
</div>
        