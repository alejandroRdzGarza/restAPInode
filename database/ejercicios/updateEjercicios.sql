UPDATE [dbo].[ejercicio]
SET [nombre] = @nombre
    ,[descripcion] = @descripcion
    ,[calorias] = @calorias
    ,[musculo] = @musculo
WHERE [IDejercicio] = @IDejercicio

SELECT [IDejercicio]
        ,[nombre]
        ,[descripcion]
        ,[calorias]
        ,[musculo]
FROM [dbo].[ejercicio]
WHERE [IDejercicio] = @IDejercicio

