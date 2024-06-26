import mongoose from "mongoose";

export const insertOne = async ({
  collection,
  query,
  data,
  options = {},
  returnDocument = "after",
}) => {
  try {
    const result = await collection.collection.insertOne(data);
    return [result, null];
  } catch (error) {
    return [null, error.message];
  }
};

export const update = async ({
  collection,
  query,
  data,
  options = {},
  returnDocument = "after",
}) => {
  try {
    const result = await collection.findOneAndUpdate(query, data, options);
    return [result, null];
  } catch (error) {
    return [
      null,
      `Could not update data in ${collection.name}: ${error.message}`,
    ];
  }
};

export const updateOne = async ({
  collection,
  query,
  data,
  options = {},
  returnDocument = "after",
}) => {
  try {
    const result = await collection.findOneAndUpdate(
      query,
      data,
      { ...options, new: returnDocument === "after" }, // Ensure correct return
    );

    return [result, null]; // Success
  } catch (error) {
    return [
      null,
      `Could not update data in ${collection.collection.name}: ${error.message}`,
    ];
  }
};

export const findOne = async ({
  collection,
  query,
  options = {},
  returnDocument = "after",
}) => {
  try {
    const result = await collection.findOne(query, options);
    return [result, null];
  } catch (error) {
    return [
      null,
      `Could not find data in ${collection.name}: ${error.message}`,
    ];
  }
};

export const findAndPopulate = async ({
  collection,
  query,
  populateOption = {},
  options = {},
  populateFilter = "",
  returnDocument = "after",
}) => {
  try {
    const result = await collection
      .find(query, options)
      .populate(populateOption);
    return [result, null];
  } catch (error) {
    return [
      null,
      `Could not find data in ${collection.name}: ${error.message}`,
    ];
  }
};

export const findMany = async ({
  collection,
  query,
  options = {},
  returnDocument = "after",
}) => {
  try {
    const result = await collection.find(query, options);
    return [result, null];
  } catch (error) {
    return [
      null,
      `Could not find data in ${collection.name}: ${error.message}`,
    ];
  }
};
