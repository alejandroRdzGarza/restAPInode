SELECT [IDejercicio]
        ,[nombre]
        ,[descripcion]
        ,[calorias]
        ,[musculo]
FROM [dbo].[ejercicio]
WHERE [IDejercicio] = @IDejercicio

