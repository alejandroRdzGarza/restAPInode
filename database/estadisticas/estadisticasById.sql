SELECT [IDestadisticas]
        ,[trofeos]
        ,[juegosCompletados]
        ,[efectividad]
        ,[rachaDias]
        ,[fecha]
        ,[IDusuario]
FROM [dbo].[estadisticas]
WHERE [IDestadisticas] = @IDestadisticas