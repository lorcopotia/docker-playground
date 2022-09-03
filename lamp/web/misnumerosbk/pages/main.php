<?php
	require 'conn.php';

    $result = $db->query("SELECT * FROM euro_table ");
?>


        <div class="d-flex flex-column-fluid" >    
            <div class="container">
                <p class="p-2 lead text-center"><strong>Resultados históricos de la lotería de Euromillones.</strong></p>
                <div class="card card-custom gutter-b p-3">
                    <table class="table table-striped table-hover gs-5">
                        <thead>
                            <tr class="fw-bolder text-muted bg-light">
                                <td>No</td>
                                <td colspan="4">Fecha</td>
                                <td colspan="5">Números</td>
                                <td colspan="2">Estrellas</td>
                                <td>Bote</td>
                                <td>Acertantes</td>
                            </tr>
                        </thead>
                        <?php                    

                        $days = [
                            "Tue" => "Mar",
                            "Fri" => "Vie",
                        ];

                        $months = [
                            "Jan" => "Ene",
                            "Feb" => "Feb",
                            "Mar" => "Mar",
                            "Apr" => "Abr",
                            "May" => "May",
                            "Jun" => "Jun",
                            "Jul" => "Jul",
                            "Aug" => "Ago",
                            "Sep" => "Sep",
                            "Oct" => "Oct",
                            "Nov" => "Nov",
                            "Dec" => "Dic",
                        ];

                        while ($row = $result->fetchArray()) {
                            echo "<tr>
                            <td>".$row['No']."</td>
                            <td>".$days[$row['DAY']]."</td>
                            <td>".$row['DD']."</td>
                            <td>".$months[$row['MMM']]."</td>
                            <td>".$row['YYYY']."</td>
                            <td class=\"table-active\">".$row['N1']."</td>
                            <td class=\"table-active\">".$row['N2']."</td>
                            <td class=\"table-active\">".$row['N3']."</td>
                            <td class=\"table-active\">".$row['N4']."</td>
                            <td class=\"table-active\">".$row['N5']."</td>
                            <td class=\"table-active text-center star-bg\">".$row['L1']."</td>
                            <td class=\"table-active text-center star-bg\">".$row['L2']."</td>
                            <td>".number_format($row['BOTE'])."</td>
                            <td>".$row['WINS']."</td>
                            </tr>"; 
                        } ?>

                        
                    </table>
                </div>
            </div>
        </div>



