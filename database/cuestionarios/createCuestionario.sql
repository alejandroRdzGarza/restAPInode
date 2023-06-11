INSERT INTO [dbo].[cuestionario]
    (
        [suenoInt]
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
    )
VALUES (
    @suenoInt
    ,@suenoFin
    ,@insomnio
    ,@desayuno
    ,@comida
    ,@cena
    ,@duracion
    ,@medicamento
    ,@frecuencia
    ,@gramos
    ,@fecha
    ,@IDusuario
    ,@IDrutina
)

SELECT SCOPE_IDENTITY() AS IdCuestionario

