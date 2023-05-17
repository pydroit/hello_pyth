from pyspark.sql import SparkSession

spark = (SparkSession.builder.
         appName("count words in pride and prejudice").
         getOrCreate())

import pyspark.sql.functions as F

results = (spark.read.text('/home/ubuntu/environment/hello_pyth/de-lab/1342-0.txt').
           select(F.split(F.col('value'), " ").alias("split_word")).
           select(F.explode(F.col("split_word")).alias("explode_word")).
           select(F.lower(F.col("explode_word")).alias("lower_word")).
           select(F.regexp_extract(F.col('lower_word'), '[a-z]*', 0).alias('clean_word')).
           where(F.col('clean_word') != "").
           groupby(F.col('clean_word')).
           count()
          )

results.coalesce(1).write.csv('/home/ubuntu/environment/hello_pyth/de-lab/combined_words4.csv')
