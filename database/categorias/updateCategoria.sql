UPDATE [dbo].[categoria]
SET [nombre] = @nombre
WHERE [IDcategoria] = @IDcategoria

SELECT [IDcategoria]
        ,[nombre]
FROM [dbo].[categoria]
WHERE [IDcategoria] = @IDcategoria
