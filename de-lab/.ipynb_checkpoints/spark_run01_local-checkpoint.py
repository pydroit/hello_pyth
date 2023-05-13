
from pyspark.sql import SparkSession
spark = (SparkSession.builder.appName("Pride and Prejudice word count").
           getOrCreate())

spark.sparkContext.setLogLevel("WARN")

import pyspark.sql.functions as F
exclusion_word_list = ['that', 'with', 'have', 'they', 'were', 'which', 'been']

result = (spark.read.text(r"C:\Users\oluwa\Downloads\to_count\*.txt").
select(F.split(F.col("value"), " ").alias("split_word")).
select(F.explode(F.col("split_word")).alias("explode_word")).
select(F.lower(F.col("explode_word")).alias("lower_word")).
select(F.regexp_extract(F.col("lower_word"), "[a-z]*", 0).alias("extract_word")).
where((F.col("extract_word") != "")&(~F.col("extract_word").isin(exclusion_word_list))&(F.length(F.col("extract_word")) > 3)).
groupby(F.col("extract_word")).
count()
)
result.coalesce(1).write.csv(r"C:\Users\oluwa\Downloads\combined_words3.csv")