<?php
	require 'conn.php';

    $duos = $db->query('SELECT L1, L2, COUNT(*) cnt FROM euro_table GROUP BY L1, L2 ORDER BY cnt DESC LIMIT 30');

    $columns = array(
        "1er número" => $db->query('SELECT N1,COUNT(*) as ocur FROM euro_table GROUP BY N1 ORDER BY ocur DESC'),
        "2do número" => $db->query('SELECT N2,COUNT(*) as ocur FROM euro_table GROUP BY N2 ORDER BY ocur DESC'),
        "3er número" => $db->query('SELECT N3,COUNT(*) as ocur FROM euro_table GROUP BY N3 ORDER BY ocur DESC'),
        "4to número" => $db->query('SELECT N4,COUNT(*) as ocur FROM euro_table GROUP BY N4 ORDER BY ocur DESC'),
        "5to número" => $db->query('SELECT N5,COUNT(*) as ocur FROM euro_table GROUP BY N5 ORDER BY ocur DESC'),
        "1ra estrella" => $db->query('SELECT L1,COUNT(*) as ocur FROM euro_table GROUP BY L1 ORDER BY ocur DESC'),
        "2da estrella" => $db->query('SELECT L2,COUNT(*) as ocur FROM euro_table GROUP BY L2 ORDER BY ocur DESC')
    );
    
?>

<div class="d-flex flex-column-fluid" >    
    <div class="container-fluid">
        <p class="p-5 lead text-center"><strong>Las tablas de abajo reflejan la cantidad de veces que ha salido determinado número de acuerdo a la posición en el boleto de Euromillones, así como la combinación de estrellas.</strong></p>
        <div class="card card-custom gutter-b p-3">
            <div class="row justify-content-center">
                <?php 
                foreach($columns as $k => $v){
                    echo "<div class=\"col col-sm-auto\">";
                    echo "<table class=\"table table-striped table-hover gs-3\">";
                    echo "<thead><tr class=\"fw-bolder text-muted bg-light\"><td scope=\"col\" colspan=\"2\">".$k."</td></tr>";
                    echo "<tr class=\"fw-bolder text-muted bg-light\"><td scope=\"col\">#</td><td scope=\"col\">Ocurrencias</td>";
                    echo "</tr></thead>";

                    
                    while ($row = $v->fetchArray()) {
                    echo "<tr>
                    <td>".$row[0]."</td>
                    <td class=\"table-active\">".$row[1]."</td>
                    </tr>";
                    }
                    
                    echo "</table></div>";
                
                }
                ?>
                
                <div class="col col-sm-auto">
                    <table class="table table-striped table-hover gs-3">
                        <thead>
                            <tr class="fw-bolder text-muted bg-light"><td scope="col" colspan="3">Combinación de Estrellas</td></tr>
                            <tr class="fw-bolder text-muted bg-light">
                                <td scope="col">1ra</td>
                                <td scope="col">2da</td>
                                <td scope="col">Ocurrencias</td>
                            </tr>
                        </thead>
                        <?php
                                while ($row = $duos->fetchArray()) {
                                    echo "<tr>
                                    <td>".$row[0]."</td>
                                    <td>".$row[1]."</td>
                                    <td class=\"table-active\">".$row[2]."</td>
                                    </tr>";
                                    
                                }
                        ?>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
