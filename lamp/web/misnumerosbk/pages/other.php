<?php
	require 'conn.php';

    $duos = $db->query('SELECT L1, L2, COUNT(*) cnt FROM euro_table GROUP BY L1, L2 ORDER BY cnt DESC LIMIT 6');

    $numbers = array(
        "1er número" => $db->query('SELECT N1,COUNT(*) as ocur FROM euro_table GROUP BY N1 ORDER BY ocur DESC LIMIT 20'),
        "2do número" => $db->query('SELECT N2,COUNT(*) as ocur FROM euro_table GROUP BY N2 ORDER BY ocur DESC LIMIT 20'),
        "3er número" => $db->query('SELECT N3,COUNT(*) as ocur FROM euro_table GROUP BY N3 ORDER BY ocur DESC LIMIT 20'),
        "4to número" => $db->query('SELECT N4,COUNT(*) as ocur FROM euro_table GROUP BY N4 ORDER BY ocur DESC LIMIT 20'),
        "5to número" => $db->query('SELECT N5,COUNT(*) as ocur FROM euro_table GROUP BY N5 ORDER BY ocur DESC LIMIT 20'),
    );

    $stars = array(
        "1ra estrella" => $db->query('SELECT L1,COUNT(*) as ocur FROM euro_table GROUP BY L1 ORDER BY ocur DESC LIMIT 8'),
        "2da estrella" => $db->query('SELECT L2,COUNT(*) as ocur FROM euro_table GROUP BY L2 ORDER BY ocur DESC LIMIT 8')
    );

    // Making queary to db limited to the first 20th
    $result1 = $db->query("SELECT N1,N2,N3,N4,N5,L1,L2 FROM euro_table LIMIT 5");
    $result2 = $db->query("SELECT N1,N2,N3,N4,N5,L1,L2 FROM euro_table LIMIT 5 OFFSET 20");

    // Create array to keep results
    $data1 = array();
    $data2 = array();
    
    // Fetch Associated Array (1 for SQLITE3_ASSOC)
    while ($res1 = $result1->fetchArray(1)) {
        //insert row into array
        array_push($data1, $res1);
    }
    while ($res2 = $result2->fetchArray(1)) {
        //insert row into array
        array_push($data2, $res2);
    }


?>

<!-- datatable -->
<link rel="stylesheet" href="https://cdn.datatables.net/1.10.15/css/jquery.dataTables.min.css">
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://cdn.datatables.net/1.10.15/js/jquery.dataTables.min.js"></script>

        <div class="d-flex flex-column-fluid" >    
            <div class="container">
                <p class="lead text-center"><strong>Número de Euromillones.</strong> Los números son generados aleatoriamente entre los números que más salen por cada posición.</p>
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
                                if (!in_array($srow[0], $sarchive)) {
                                    array_push($sarchive, $srow[0]); 
                                }
                            }
                            // closing table
                            echo "</table></div>";
                            
                        }
                        ?>
                    </div>
                    <div class="row card-group">
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
                <div class="card card-custom gutter-b bg-secondary">
                    <div class="m-4 p-6 row justify-content-center">
                        <?php 
                        // foreach($result as $val)  {
                        //     $lista = implode(', ', $archive);
                        //     print_r($lista); 
                        // }

                        // $test = array("N1" => "12", "N2" => "24", "N3" => "34", "N4"=> "46", "N5" => "50", "L1" => "1", "L2" => "4");
                        // $salida = array_equal($data1, $test);
                        // print_r($salida);
                        
                        print_r(array_intersect_uassoc($data1, $data2, "strcasecmp"));

                        // print_r(array_intersect_uassoc($data1, $data2, "strcasecmp", "strcasecmp"));

                        echo " ================================================================= \n";

                        // $arrflip = array_flip($data);
                        print_r($data1);
                        echo " ================================================================= \n";

                        print_r($data2);
                        // $reversed = array_reverse($data1);
                        // print_r($reversed);
                        
                        
                        // print_r(array_intersect($reversed, $data));

                        // $interout = array_intersect($reversed, $data1);

                        // foreach($interout as $key => $val){
                        //     echo "<div class=\"card \"><div class=\" card-body\">";
                        //     echo "<div class=\"container btn btn-primary disabled text-center\"><h1 class=\"display-4\">";
                            
                        //     print_r($val);

                        //     echo "</h1></div></div></div>";
                        // }
                        
                        // print_r($r = array_equal($result, $kid));
                        ?>
                    </div>
                </div>
        </div>
        