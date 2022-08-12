<?php 
include("../Admin/conexion.php");
?>

<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="Description" content="Enter your description here"/>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" >
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" ></script>

<script src="../Alert/sweetalert-dev.js"></script>
  <link rel="stylesheet" href="../Alert/sweetalert.css">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">

 <!-- ESTILO CURSOS DE PROGRAMACION -->
 <link rel="stylesheet" href="../css/style_cp.css">


<title>Consulta basica</title>
</head>
<body>






<!-- NAVBAR -->
<?php include("../Admin/navbar.php"); ?>
<!-- END NAVBAR -->







<!-- datatable -->
<link rel="stylesheet" href="https://cdn.datatables.net/1.10.15/css/jquery.dataTables.min.css">
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://cdn.datatables.net/1.10.15/js/jquery.dataTables.min.js"></script>




<!-- vista C -->
<div class="center mt-5">
    <div class="card pt-3" >
            <p style="font-weight: bold; color: #0F6BB7; font-size: 22px;">Buscador Javascript</p>
        <div class="container-fluid p-5">
<table class="table" id="example">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">Imagen</th>
<th scope="col">Nombre</th>
<th scope="col">Categoria</th>
<th scope="col">Detalle</th>
</tr>
</thead>
<tbody>
            <?php $busqueda=mysqli_query($conexion,"SELECT * FROM articulos_cp "); 
            $numero = mysqli_num_rows($busqueda); ?>
            <h5 class="card-tittle">Resultados (<?php echo $numero; ?>)</h5>
            <div class="container_card">
                <?php while ($resultado = mysqli_fetch_assoc($busqueda)){
                    if(!empty($num)){ $num = $num++; }else{$num = ''; }
                  $num++;
                  ?>
<tr>
<th scope="row" style="vertical-align: middle;"><?php echo $num; ?></th>
<td><img src="../Insertar artículo/articulos/<?php echo $resultado["img"]; ?>.jpg" alt="" width="100px"></td>
<td style="vertical-align: middle;"><?php echo $resultado["titulo"]; ?></td>
<td style="vertical-align: middle;"><?php echo $resultado["categoria"]; ?></td>
<td style="vertical-align: middle;"><?php echo $resultado["descripcion"]; ?></td>
</tr>    

                <?php } ?>

</tbody>
</table>
            
        </div>
    </div>
</div>
<!-- END vista C -->


<!-- cambiamos idioma -->
<script>
    $(document).ready(function() {
//   $.fn.DataTable.ext.pager.numbers_length = 5;
    $('#example').DataTable( {

// que aparezcan ultimo siguiente etc...
       "pagingType":"full_numbers",
// ordenamos
       "order": [[ 2, "ASC" ]],
    //    cambiamos idioma
       "language": {
    "decimal":        ".",
    "emptyTable":     "No hay datos para mostrar",
    "info":           "del _START_ al _END_ (_TOTAL_ total)",
    "infoEmpty":      "del 0 al 0 (0 total)",
    "infoFiltered":   "(filtrado de todas las _MAX_ entradas)",
    "infoPostFix":    "",
    "thousands":      "'",
    "lengthMenu":     "Mostrar _MENU_ entradas",
    "loadingRecords": "Cargando...",
    "processing":     "Procesando...",
    "search":         "Buscar:",
    "zeroRecords":    "No hay resultados",
    "paginate": {
      "first":      "Primero",
      "last":       "Último",
      "next":       "Siguiente",
      "previous":   "Anterior"
    },
    "aria": {
      "sortAscending":  ": ordenar de manera Ascendente",
      "sortDescending": ": ordenar de manera Descendente ",
    }
  }

    } );  
} );

</script>



<!-- <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" ></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" ></script> -->

</body>
</html>








