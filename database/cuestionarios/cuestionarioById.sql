SELECT [IdCuestionario]
        ,[suenoInt]
        ,[suenoFin]
        ,[insomnio]
        ,[desayuno]
        ,[comida]
        ,[cena]
        ,[duracion]
        ,[medicamento]
        ,[frecuencia]
        ,[gramos]
        ,[fecha]
        ,[IDusuario]
        ,[IDrutina]
FROM [dbo].[cuestionario]
WHERE [IdCuestionario] = @IdCuestionario
