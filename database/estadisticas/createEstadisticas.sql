INSERT INTO [dbo].[estadisticas]
    (
        [trofeos]
        ,[juegosCompletados]
        ,[efectividad]
        ,[rachaDias]
        ,[fecha]
        ,[IDusuario]
    )
VALUES (
    @trofeos
    ,@juegosCompletados
    ,@efectividad
    ,@rachaDias
    ,@fecha
    ,@IDusuario
)

SELECT SCOPE_IDENTITY() AS IDestadisticas

