// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Note: this file is purely for documentation. Any contents are not expected
// to be loaded as the JS file.

/**
 * A set of field paths on a document.
 * Used to restrict a get or update operation on a document to a subset of its
 * fields.
 * This is different from standard field masks, as this is always scoped to a
 * Document, and takes in account the dynamic nature of Value.
 *
 * @property {string[]} fieldPaths
 *   The list of field paths in the mask. See Document.fields for a field
 *   path syntax reference.
 *
 * @typedef DocumentMask
 * @memberof google.firestore.v1
 * @see [google.firestore.v1.DocumentMask definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/firestore/v1/common.proto}
 */
const DocumentMask = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A precondition on a document, used for conditional operations.
 *
 * @property {boolean} exists
 *   When set to `true`, the target document must exist.
 *   When set to `false`, the target document must not exist.
 *
 * @property {Object} updateTime
 *   When set, the target document must exist and have been last updated at
 *   that time.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef Precondition
 * @memberof google.firestore.v1
 * @see [google.firestore.v1.Precondition definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/firestore/v1/common.proto}
 */
const Precondition = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Options for creating a new transaction.
 *
 * @property {Object} readOnly
 *   The transaction can only be used for read operations.
 *
 *   This object should have the same structure as [ReadOnly]{@link google.firestore.v1.ReadOnly}
 *
 * @property {Object} readWrite
 *   The transaction can be used for both read and write operations.
 *
 *   This object should have the same structure as [ReadWrite]{@link google.firestore.v1.ReadWrite}
 *
 * @typedef TransactionOptions
 * @memberof google.firestore.v1
 * @see [google.firestore.v1.TransactionOptions definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/firestore/v1/common.proto}
 */
const TransactionOptions = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Options for a transaction that can be used to read and write documents.
   *
   * @property {Buffer} retryTransaction
   *   An optional transaction to retry.
   *
   * @typedef ReadWrite
   * @memberof google.firestore.v1
   * @see [google.firestore.v1.TransactionOptions.ReadWrite definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/firestore/v1/common.proto}
   */
  ReadWrite: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Options for a transaction that can only be used to read documents.
   *
   * @property {Object} readTime
   *   Reads documents at the given time.
   *   This may not be older than 60 seconds.
   *
   *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
   *
   * @typedef ReadOnly
   * @memberof google.firestore.v1
   * @see [google.firestore.v1.TransactionOptions.ReadOnly definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/firestore/v1/common.proto}
   */
  ReadOnly: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },
};
