<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Reporte</title>
    <style>
        /* Estilos CSS para el PDF */
        /* ... */
    </style>
</head>
<body>
    <h1>Reporte de Pacientes</h1>

    <table>
        <thead>
            <tr>
                @foreach($campos as $campo)
                    <th>{{ ucfirst($campo) }}</th>
                @endforeach
            </tr>
        </thead>
        <tbody>
            @foreach($data as $item)
                <tr>
                    @foreach($campos as $campo)
                        <td>{{ $item[$campo] }}</td>
                    @endforeach
                </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>
