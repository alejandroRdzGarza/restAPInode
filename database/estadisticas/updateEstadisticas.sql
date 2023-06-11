UPDATE [dbo].[estadisticas]
SET [trofeos] = @trofeos
    ,[juegosCompletados] = @juegosCompletados
    ,[efectividad] = @efectividad
    ,[rachaDias] = @rachaDias
    ,[fecha] = @fecha
    ,[IDusuario] = @IDusuario
WHERE [IDestadisticas] = @IDestadisticas

SELECT [IDestadisticas]
        ,[trofeos]
        ,[juegosCompletados]
        ,[efectividad]
        ,[rachaDias]
        ,[fecha]
        ,[IDusuario]
FROM [dbo].[estadisticas]
WHERE [IDestadisticas] = @IDestadisticas
